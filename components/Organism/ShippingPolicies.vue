<template>
  <div class="shipping-policies-section">
    <div class="section-header">
        <h3>Shipping and return policies</h3>
    </div>

    <!-- Timeline -->
    <div class="shipping-timeline">
        <div class="timeline-label">
            <strong>Estimated arrival</strong>
            <span class="dates">Dec 27 - Jan 4</span>
        </div>
        
        <div class="timeline-visual">
            <div class="step">
                <div class="dot active"></div>
                <div class="text">Dec 19<br><span class="sub">Order placed</span></div>
            </div>
            <div class="line"></div>
            <div class="step">
                <div class="dot"></div>
                <div class="text">Dec 20-22<br><span class="sub">Order ships</span></div>
            </div>
            <div class="line"></div>
            <div class="step">
                <div class="dot"></div>
                <div class="text">Dec 27-Jan 4<br><span class="sub">Delivered!</span></div>
            </div>
        </div>
    </div>

    <div class="shipping-details-grid">
        <div class="detail-box">
            <span class="label">Cost to ship</span>
            <span class="value">Free</span>
        </div>
        <div class="detail-box">
            <span class="label">Returns</span>
            <span class="value">Accepted within 30 days</span>
            <span class="sub-link">Exceptions may apply</span>
        </div>
        <div class="detail-box">
             <span class="label">Ships from</span>
             <span class="value">Istanbul, Turkey</span>
        </div>
    </div>
    
    <div class="carbon-offset">
         🍃 <strong>Etsy offsets carbon emissions</strong> from shipping and packaging on this purchase.
    </div>
  </div>
</template>

<style scoped>
.shipping-policies-section {
    margin-top: 30px;
    padding-bottom: 30px;
    border-bottom: 1px solid #e1e3df;
    font-family: 'Graphik Webfont', sans-serif;
    color: #222;
}

.section-header h3 {
    font-size: 1.3rem;
    font-weight: 500;
    margin-bottom: 24px;
}

.timeline-label {
    display: flex;
    justify-content: space-between;
    font-size: 1rem;
    margin-bottom: 16px;
}
.timeline-label .dates { font-weight: 600; }

.timeline-visual {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 32px;
    position: relative;
    padding: 0 10px;
}

.step {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    z-index: 2;
    background: white; 
    padding: 0 8px;
}

.dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #e1e3df;
    margin-bottom: 8px;
    border: 2px solid white;
    box-shadow: 0 0 0 1px #e1e3df;
}

.dot.active {
    background-color: #222;
    box-shadow: 0 0 0 1px #222;
}

.line {
    flex-grow: 1;
    height: 2px;
    background-color: #e1e3df;
    margin-top: -38px; /* Align with dots roughly */
    z-index: 1;
}

.text { font-size: 0.9rem; font-weight: 600; line-height: 1.2; }
.text .sub { font-weight: 400; font-size: 0.8rem; color: #595959; }

.shipping-details-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-bottom: 24px;
}

.detail-box {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.detail-box .label { font-size: 0.9rem; color: #595959; }
.detail-box .value { font-size: 1.1rem; font-weight: 600; }
.detail-box .sub-link { font-size: 0.8rem; text-decoration: underline; color: #595959; cursor: pointer; }

.carbon-offset {
    background-color: #f7f7f7;
    padding: 12px;
    border-radius: 24px;
    font-size: 0.9rem;
    text-align: center;
}
</style>
