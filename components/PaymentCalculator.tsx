'use client';

import { useState } from 'react';
import { projects } from '@/data/siteData';

export default function PaymentCalculator() {
  const [formData, setFormData] = useState({
    project: '',
    apartmentType: '',
    totalPrice: '',
    bookingAmount: '',
    downPayment: '',
    duration: '60',
  });
  const [result, setResult] = useState<{
    remaining: string;
    monthly: string;
  } | null>(null);

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setResult(null);
  };

  const calculate = () => {
    const total = parseFloat(formData.totalPrice.replace(/[^0-9]/g, ''));
    const booking = parseFloat(formData.bookingAmount.replace(/[^0-9]/g, ''));
    const downPayment = parseFloat(formData.downPayment.replace(/[^0-9]/g, ''));
    const months = parseInt(formData.duration);

    if (!total || !booking || !downPayment || !months || months <= 0) return;

    const remaining = total - booking - downPayment;
    const monthly = Math.round(remaining / months);

    setResult({
      remaining: remaining.toLocaleString('en-PK'),
      monthly: monthly.toLocaleString('en-PK'),
    });
  };

  const handleProjectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const projectId = e.target.value;
    const project = projects.find((p) => String(p.id) === projectId);
    if (project) {
      setFormData((prev) => ({
        ...prev,
        project: projectId,
        totalPrice: project.totalPrice.replace(/[^0-9]/g, ''),
        bookingAmount: project.bookingAmount.replace(/[^0-9]/g, ''),
        downPayment: project.downPayment.replace(/[^0-9]/g, ''),
      }));
    }
  };

  return (
    <section id="calculator" className="section">
      <div className="container">
        <div className="text-center reveal" style={{ marginBottom: '40px' }}>
          <span className="section-label">Payment Calculator</span>
          <h2 className="section-title">Estimate Your Installment</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Select a project and see your estimated monthly payment. Final terms confirmed directly with our team.
          </p>
        </div>

        <div className="calculator reveal">
          <div className="calculator-grid">
            <div className="form-group">
              <label>Select Project</label>
              <select value={formData.project} onChange={(e) => handleProjectChange(e)}>
                <option value="">Choose a project...</option>
                {projects.map((p) => (
                  <option key={p.id} value={p.id}>{p.name}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Apartment Type</label>
              <select value={formData.apartmentType} onChange={(e) => handleChange('apartmentType', e.target.value)}>
                <option value="">Select type...</option>
                <option value="1 Bedroom">1 Bedroom</option>
                <option value="2 Bedroom">2 Bedroom</option>
                <option value="3 Bedroom">3 Bedroom</option>
                <option value="Penthouse">Penthouse</option>
              </select>
            </div>

            <div className="form-group">
              <label>Total Price (PKR)</label>
              <input
                type="text"
                value={formData.totalPrice}
                onChange={(e) => handleChange('totalPrice', e.target.value)}
                placeholder="e.g. 12000000"
              />
            </div>

            <div className="form-group">
              <label>Booking Amount (PKR)</label>
              <input
                type="text"
                value={formData.bookingAmount}
                onChange={(e) => handleChange('bookingAmount', e.target.value)}
                placeholder="e.g. 1500000"
              />
            </div>

            <div className="form-group">
              <label>Down Payment (PKR)</label>
              <input
                type="text"
                value={formData.downPayment}
                onChange={(e) => handleChange('downPayment', e.target.value)}
                placeholder="e.g. 1500000"
              />
            </div>

            <div className="form-group">
              <label>Installment Duration</label>
              <select value={formData.duration} onChange={(e) => handleChange('duration', e.target.value)}>
                <option value="36">36 Months</option>
                <option value="48">48 Months</option>
                <option value="60">60 Months</option>
                <option value="72">72 Months</option>
                <option value="84">84 Months</option>
                <option value="120">120 Months</option>
              </select>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <button
              type="button"
              className="btn btn-primary"
              onClick={calculate}
            >
              Calculate Installment
            </button>
          </div>

          {result && (
            <div className="calculator-result">
              <div className="result-item">
                <div className="result-item-label">Remaining Amount</div>
                <div className="result-item-value">PKR {result.remaining}</div>
              </div>
              <div className="result-item">
                <div className="result-item-label">Monthly Installment</div>
                <div className="result-item-value">PKR {result.monthly}</div>
              </div>
            </div>
          )}

          <p className="calculator-disclaimer">
            These calculations are estimates only. Final payment terms, rates, and schedules should be confirmed directly with Meridian Properties.
          </p>
        </div>
      </div>
    </section>
  );
}
