export default function SmartCartVisual() {
  return (
    <div className="pf-window">
      <div className="pf-window-bar"><span /><span /><span /></div>
      <div className="pf-window-content sc-content">
        <div className="sc-logo-row">
          <div className="sc-logo-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
          </div>
          <span className="sc-logo-text">SmartCart</span>
        </div>
        <div className="sc-cart">
          <div className="sc-item">
            <span className="sc-item-emoji">🥛</span>
            <div className="sc-item-info">
              <span className="sc-item-name">Whole Milk</span>
              <span className="sc-item-aisle">Aisle D</span>
            </div>
            <span className="sc-item-price">$3.49</span>
          </div>
          <div className="sc-item">
            <span className="sc-item-emoji">🍞</span>
            <div className="sc-item-info">
              <span className="sc-item-name">Sourdough</span>
              <span className="sc-item-aisle">Bakery</span>
            </div>
            <span className="sc-item-price">$4.99</span>
          </div>
          <div className="sc-item">
            <span className="sc-item-emoji">🍎</span>
            <div className="sc-item-info">
              <span className="sc-item-name">Apples</span>
              <span className="sc-item-aisle">Produce</span>
            </div>
            <span className="sc-item-price sc-coupon">$2.99 <s>$3.99</s></span>
          </div>
          <div className="sc-route-hint">
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12h18M13 6l6 6-6 6"/></svg>
            Optimal route: P &rarr; B &rarr; D
          </div>
        </div>
      </div>
    </div>
  );
}
