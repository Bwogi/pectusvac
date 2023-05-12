import { BugAntIcon, ChatBubbleLeftRightIcon, ComputerDesktopIcon } from '@heroicons/react/24/outline'

export default function Contact() {
  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8" id='contact'>
      <div className="mx-auto max-w-2xl sm:text-center">
        <h2 className="text-3xl font-medium tracking-tight text-gray-800">Contact Us</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
        We're here to help! Feel free to reach out to us with any questions or concerns by using the provided contact information.
        </p>
      </div>
      <div className="mx-auto mt-20 max-w-lg space-y-16">
        <div className="flex gap-x-6">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#4796b0]">
            <ChatBubbleLeftRightIcon className="h-6 w-6 text-white" aria-hidden="true" />
          </div>
          <div>
            <h3 className="text-base font-semibold leading-7 text-gray-600">Sales support</h3>
            <p className="mt-2 leading-7 text-gray-400">
            Our dedicated sales support team is ready to assist you with any inquiries, product information, or assistance you may need.
            </p>
            <p className="mt-4">
              <a href="mailto:info@pmdmdllc.com" className="text-sm font-semibold leading-6 text-[#4796b0]">
                Contact us <span aria-hidden="true">&rarr;</span>
              </a>
            </p>
          </div>
        </div>
        
        <div className="flex gap-x-6">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#4796b0]">
            <ComputerDesktopIcon className="h-6 w-6 text-white" aria-hidden="true" />
          </div>
          <div>
            <h3 className="text-base font-semibold leading-7 text-gray-600">Technical support</h3>
            <p className="mt-2 leading-7 text-gray-400">
            Need technical assistance? Our experienced and knowledgeable technical support team is available to help you troubleshoot any issues and provide solutions.
            </p>
            <p className="mt-4">
              <a href="mailto:info@pmdmdllc.com" className="text-sm font-semibold leading-6 text-[#4796b0]">
                Contact us <span aria-hidden="true">&rarr;</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
