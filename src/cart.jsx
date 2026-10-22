import React, {createContext, useContext, useEffect, useRef, useState} from 'react';
import {products} from './products';
import './cart.css';

const CartContext = createContext(null);
const STORAGE_KEY = 'lumalab-cart-v1';
const price = item => item.kind === 'kit' ? 2350 : 750;
const format = cents => (cents / 100).toLocaleString('pt-BR', {style:'currency', currency:'BRL'});
const title = item => `${item.kind === 'kit' ? 'Kit ' : ''}${item.name}`;
function readCart() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!saved || typeof saved !== 'object') return {};
    return Object.fromEntries(products.filter(p => Number.isInteger(saved[p.id]) && saved[p.id] > 0 && saved[p.id] <= 99).map(p => [p.id, saved[p.id]]));
  } catch { return {}; }
}
function BasketIcon(){return <svg viewBox="0 0 120 100" fill="none" aria-hidden="true"><path d="M33 35 49 10M87 35 71 10"/><path d="M12 36h96l-12 54H24L12 36Z"/><path d="M8 35h104M43 48l4 29m30-29-4 29M60 48v29"/></svg>}

export function AddToBasket({item}) {
  const {add, cart} = useContext(CartContext);
  const full = (cart[item.id] || 0) >= 99;
  return <button className="add-to-basket" disabled={full} aria-label={`Adicionar ${title(item)} à cesta`} title={full?'Limite de 99 por produto':'Adicionar à cesta'} onClick={event => add(item, event.currentTarget.closest('article').querySelector('.product-photo'))}>+</button>;
}

export function CartProvider({children}) {
  const [cart, setCart] = useState(readCart);
  const [notice, setNotice] = useState('');
  const basket = useRef(null);
  const dialog = useRef(null);
  const flights = useRef(new Set());
  const lastFocus = useRef(null);
  const oldOverflow = useRef('');
  const entries = products.filter(p => cart[p.id]).map(item => ({item, quantity:cart[item.id]}));
  const count = entries.reduce((n, entry) => n + entry.quantity, 0);
  const total = entries.reduce((n, entry) => n + price(entry.item) * entry.quantity, 0);
  useEffect(() => {try {localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));} catch {/* A cesta continua utilizável se o armazenamento estiver indisponível. */}}, [cart]);
  useEffect(() => () => {flights.current.forEach(node => node.remove()); document.body.style.overflow = oldOverflow.current;}, []);
  function fly(image) {
    if (!image || window.matchMedia('(prefers-reduced-motion: reduce)').matches || !image.animate) return;
    const from = image.getBoundingClientRect(), to = basket.current.getBoundingClientRect();
    const clone = document.createElement('img');
    clone.src = image.currentSrc || image.src;
    clone.alt = '';
    clone.className = 'flying-product';
    clone.style.cssText = `left:${from.left}px;top:${from.top}px;width:${from.width}px;height:${from.height}px`;
    document.body.append(clone);
    flights.current.add(clone);
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const animation = clone.animate([
      {transform:'translate(0,0) scale(1)', opacity:.85},
      {transform:`translate(${to.left + to.width/2 - from.left - from.width/2}px,${to.top + to.height/2 - from.top - from.height/2}px) scale(.14) rotate(12deg)`, opacity:.25}
    ], {duration:650, easing:'cubic-bezier(.4,0,.2,1)'});
    const cleanup = () => {clone.remove(); flights.current.delete(clone); media.removeEventListener('change', cancel);};
    const cancel = () => animation.cancel();
    media.addEventListener('change', cancel, {once:true});
    animation.addEventListener('finish', cleanup, {once:true});
    animation.addEventListener('cancel', cleanup, {once:true});
  }
  function add(item, image) {
    setCart(current => ({...current, [item.id]:Math.min(99, (current[item.id] || 0) + 1)}));
    setNotice(`${title(item)} adicionado à cesta.`);
    fly(image);
  }
  function change(id, delta) {
    setCart(current => {
      const next = {...current}, value = Math.min(99, (next[id] || 0) + delta);
      if (value <= 0) delete next[id]; else next[id] = value;
      return next;
    });
  }
  function open() {
    lastFocus.current = document.activeElement;
    oldOverflow.current = document.body.style.overflow;
    dialog.current.showModal();
    document.body.style.overflow = 'hidden';
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) dialog.current.animate([{transform:'translateX(100%)'}, {transform:'translateX(0)'}], {duration:300, easing:'ease-out'});
  }
  function close() {dialog.current.close();}
  const text = ['Olá! Gostaria de pedir estes produtos da LumaLab:', '', ...entries.map(({item,quantity}) => `${quantity} × ${title(item)} — ${item.kind==='kit'?'kit com 4 bottons':'1 botton'} de 44 mm — ${format(price(item)*quantity)}`), '', `Total dos produtos: ${format(total)}`, 'Podemos combinar a disponibilidade, o pagamento e a entrega?'].join('\n');
  return <CartContext.Provider value={{add,cart}}>{children}
    <div className="sr-only" role="status">{notice}</div>
    <button ref={basket} className="visual-basket" onClick={open} aria-label={`Abrir cesta, ${count} ${count===1?'produto':'produtos'}`}>
      <span className="basket-thumbnails" aria-hidden="true">{entries.flatMap(({item,quantity})=>Array.from({length:Math.min(quantity,4)},(_,i)=>({item,key:`${item.id}-${i}`}))).slice(-6).map(({item,key},index)=><img key={key} src={item.images[0]} alt="" style={{left:`${18+(index%3)*20}px`,bottom:`${25+Math.floor(index/3)*15}px`,transform:`rotate(${(index%3-1)*17}deg)`}}/>)}</span>
      <BasketIcon/><span className="basket-count">{count}</span><span className="basket-label">Sua cesta</span>
    </button>
    <dialog ref={dialog} className="cart-drawer" aria-labelledby="cart-title" onClose={()=>{document.body.style.overflow=oldOverflow.current;lastFocus.current?.focus();}} onClick={event=>{const rect=event.currentTarget.getBoundingClientRect();if(event.target===event.currentTarget && (event.clientX<rect.left || event.clientX>rect.right || event.clientY<rect.top || event.clientY>rect.bottom))close();}}>
      <div className="cart-heading"><div><span className="eyebrow">SEUS PEQUENOS FAVORITOS</span><h2 id="cart-title">Sua cesta <span>({count})</span></h2></div><button className="cart-close" onClick={close} aria-label="Fechar cesta" autoFocus>×</button></div>
      <div className="cart-items">{entries.length?entries.map(({item,quantity})=><article className="cart-line" key={item.id}><img src={item.images[0]} alt={title(item)}/><div><h3>{title(item)}</h3><p>{item.kind==='kit'?'4 bottons':'1 botton'} · 44 mm · {format(price(item))}</p><div className="quantity-controls"><button aria-label={`Diminuir quantidade de ${title(item)}`} onClick={()=>change(item.id,-1)}>−</button><span aria-label={`Quantidade de ${title(item)}`}>{quantity}</span><button disabled={quantity>=99} aria-label={`Aumentar quantidade de ${title(item)}`} onClick={()=>change(item.id,1)}>+</button><button className="remove-item" onClick={()=>setCart(current=>{const next={...current};delete next[item.id];return next;})} aria-label={`Remover ${title(item)}`}>Remover</button></div><strong>{format(price(item)*quantity)}</strong></div></article>):<div className="cart-empty"><BasketIcon/><h3>Sua cesta espera por você.</h3><p>Toque no + dos seus kits favoritos para começar.</p><button onClick={close}>Explorar os kits →</button></div>}</div>
      <div className="cart-summary"><div><span>Total dos produtos</span><strong>{format(total)}</strong></div><p>Disponibilidade, pagamento e entrega combinados pelo WhatsApp.</p>{entries.length?<a className="whatsapp-checkout" href={`https://wa.me/5532999240859?text=${encodeURIComponent(text)}`} target="_blank" rel="noopener noreferrer">Pedir pelo WhatsApp ↗</a>:<button className="whatsapp-checkout" disabled>Adicione um produto para pedir</button>}<small>A mensagem abre preenchida. Você confirma o envio no WhatsApp.</small></div>
    </dialog>
  </CartContext.Provider>;
}
