import { useState } from 'react'
import Button from '../components/Button'

const steps = ['Reporter Details', 'Incident Details', 'Review & Submit']

const ReportForm = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '', region: '', contact: '',
    conflictType: '', description: ''
  })
  const [errors, setErrors] = useState({})

  const update = (field, value) => {
    setForm({ ...form, [field]: value })
    setErrors({ ...errors, [field]: '' })
  }

  const validateStep = () => {
    const newErrors = {}
    if (currentStep === 0) {
      if (!form.name) newErrors.name = 'Name is required'
      if (!form.region) newErrors.region = 'Region is required'
      if (!form.contact) newErrors.contact = 'Contact is required'
    }
    if (currentStep === 1) {
      if (!form.conflictType) newErrors.conflictType = 'Please select a conflict type'
      if (!form.description) newErrors.description = 'Description is required'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const next = () => { if (validateStep()) setCurrentStep(currentStep + 1) }
  const back = () => setCurrentStep(currentStep - 1)
  const submit = () => { if (validateStep()) setSubmitted(true) }

  if (submitted) {
    return (
      <div className="max-w-xl mx-auto text-center py-20">
        <div className="text-5xl mb-4">✅</div>
        <h2 className="text-2xl font-bold text-blue-900 mb-2">Report Submitted</h2>
        <p className="text-gray-600 mb-6">Thank you. Your incident report has been received.</p>
        <Button onClick={() => { setSubmitted(false); setCurrentStep(0); setForm({ name: '', region: '', contact: '', conflictType: '', description: '' }) }}>
          Submit Another
        </Button>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-blue-900 mb-6">Resolution Incident Form</h2>

      {/* Progress Bar */}
      <div className="flex items-center mb-8">
        {steps.map((step, index) => (
          <div key={index} className="flex-1 flex flex-col items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold
              ${index <= currentStep ? 'bg-blue-900 text-white' : 'bg-gray-200 text-gray-500'}`}>
              {index + 1}
            </div>
            <p className={`text-xs mt-1 text-center ${index <= currentStep ? 'text-blue-900 font-semibold' : 'text-gray-400'}`}>
              {step}
            </p>
            {index < steps.length - 1 && (
              <div className={`h-1 w-full mt-4 ${index < currentStep ? 'bg-blue-900' : 'bg-gray-200'}`} />
            )}
          </div>
        ))}
      </div>

      {/* Step 1 */}
      {currentStep === 0 && (
        <div className="bg-white rounded-xl shadow p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input value={form.name} onChange={(e) => update('name', e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-800"
              placeholder="Enter your full name" />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Region</label>
            <select value={form.region} onChange={(e) => update('region', e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-800">
              <option value="">Select region</option>
              <option>Ngong</option>
              <option>Kajiado</option>
              <option>Nairobi</option>
            </select>
            {errors.region && <p className="text-red-500 text-xs mt-1">{errors.region}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Contact</label>
            <input value={form.contact} onChange={(e) => update('contact', e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-800"
              placeholder="Phone or email" />
            {errors.contact && <p className="text-red-500 text-xs mt-1">{errors.contact}</p>}
          </div>
          <div className="flex justify-end">
            <Button onClick={next}>Next</Button>
          </div>
        </div>
      )}

      {/* Step 2 */}
      {currentStep === 1 && (
        <div className="bg-white rounded-xl shadow p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Conflict Type</label>
            <select value={form.conflictType} onChange={(e) => update('conflictType', e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-800">
              <option value="">Select conflict type</option>
              <option>Land Dispute</option>
              <option>Domestic Violence</option>
              <option>Community Tension</option>
              <option>Resource Conflict</option>
              <option>Other</option>
            </select>
            {errors.conflictType && <p className="text-red-500 text-xs mt-1">{errors.conflictType}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea value={form.description} onChange={(e) => update('description', e.target.value)}
              rows={4}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-800"
              placeholder="Describe the incident..." />
            {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description}</p>}
          </div>
          <div className="flex justify-between">
            <Button variant="outline" onClick={back}>Back</Button>
            <Button onClick={next}>Next</Button>
          </div>
        </div>
      )}

      {/* Step 3 - Review */}
      {currentStep === 2 && (
        <div className="bg-white rounded-xl shadow p-6 space-y-4">
          <h3 className="text-lg font-bold text-blue-900">Review Your Report</h3>
          <div className="bg-gray-50 rounded-lg p-4 space-y-2 text-sm text-gray-700">
            <p><span className="font-semibold">Name:</span> {form.name}</p>
            <p><span className="font-semibold">Region:</span> {form.region}</p>
            <p><span className="font-semibold">Contact:</span> {form.contact}</p>
            <p><span className="font-semibold">Conflict Type:</span> {form.conflictType}</p>
            <p><span className="font-semibold">Description:</span> {form.description}</p>
          </div>
          <div className="flex justify-between">
            <Button variant="outline" onClick={back}>Back</Button>
            <Button variant="secondary" onClick={submit}>Submit Report</Button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ReportForm