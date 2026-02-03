const HowItWorks = () => {
  const steps = [
    {
      number: '1',
      title: 'Input Your Info',
      description: 'Upload your old resume or start from scratch. Our AI will guide you through the process.',
      icon: '📝',
    },
    {
      number: '2',
      title: 'Let AI Work Its Magic',
      description: 'Watch your resume evolve with smart suggestions, keyword optimization, and formatting improvements.',
      icon: '✨',
    },
    {
      number: '3',
      title: 'Download & Apply',
      description: 'Export in PDF, DOCX, or share directly to job portals. Get ready to land your dream job!',
      icon: '🚀',
    },
  ]

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-navy-800 to-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Three Steps to Your Dream Job
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Simple, fast, and effective. Get your perfect resume in minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting Line (hidden on mobile) */}
          <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-500 opacity-30"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-navy-800 border border-navy-700 rounded-xl p-8 text-center hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105">
                {/* Step Number Badge */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-blue-500/50">
                    {step.number}
                  </div>
                  <div className="absolute -top-2 -right-2 text-3xl">{step.icon}</div>
                </div>

                <h3 className="text-2xl font-semibold text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <button
            onClick={() => {
              const element = document.getElementById('pricing')
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 font-semibold text-lg shadow-lg shadow-blue-600/50"
          >
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
