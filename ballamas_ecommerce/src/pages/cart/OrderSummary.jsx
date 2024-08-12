import React from 'react'

const OrderSummary = () => {
  return (
    <div className="mt-6 max-w-4xl flex-1 border rounded-lg space-y-6 lg:mt-0 lg:w-full">
    <div className="space-y-4 rounded-lg border border-gray-200 p-4 shadow-sm  sm:p-6">
      <p className="text-xl font-semibold text-gray-900  ">Order summary</p>

      <div className="space-y-4">
        <div className="space-y-2">
          <dl className="flex items-center justify-between gap-4">
            <dt className="text-base font-normal text-gray-500  ">Subtotal</dt>
            <dd className="text-base font-medium text-gray-900  ">$7,592.00</dd>
          </dl>

          <dl className="flex items-center justify-between gap-4">
            <dt className="text-base font-normal text-gray-500  ">Discount</dt>
            <dd className="text-base font-medium  text-gray-900">-$299.00</dd>
          </dl>
         
        </div>

        <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2  ">
          <dt className="text-base font-bold text-gray-900 py-2">Total</dt>
          <dd className="text-base font-bold text-gray-900 ">$8,191.00</dd>
        </dl>
      </div>

      <a href="#" className="w-full text-sm font-medium hover:bg-b-dark-gray transition space-y-2 focus:outline-none focus:ring-4 focus:ring-primary-300 py-2   focus:ring-primary-800 btn-primary mt-4">Checkout now</a>

    </div>

   
    </div>
  )
}

export default OrderSummary
