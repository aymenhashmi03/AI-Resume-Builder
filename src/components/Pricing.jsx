const Pricing = () => {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: '',
      description: 'Perfect for getting started',
      features: [
        'Basic resume builder',
        '1 professional template',
        'PDF export',
        'Basic formatting tools',
        'Email support',
      ],
      cta: 'Get Started',
      ctaStyle: 'outline',
      popular: false,
    },
    {
      name: 'Pro',
      price: '$9.99',
      period: '/mo',
      description: 'Most popular choice',
      features: [
        'All premium templates',
        'AI-powered suggestions',
        'Cover letter generator',
        'Resume scoring & feedback',
        'Multiple export formats',
        'Priority support',
        'LinkedIn profile optimizer',
      ],
      cta: 'Upgrade to Pro',
      ctaStyle: 'primary',
      popular: true,
    },
    {
      name: 'Elite',
      price: '$19.99',
      period: '/mo',
      description: 'For serious job seekers',
      features: [
        'Everything in Pro',
        'Job matching & ATS optimization',
        'Interview prep assistant',
        'Skill gap analyzer',
        'Resume versioning',
        'Advanced analytics',
        '24/7 priority support',
        'Custom branding',
      ],
      cta: 'Go Elite',
      ctaStyle: 'outline',
      popular: false,
    },
  ]

  return (
    <section id="pricing" className="py-20 bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Flexible Plans for Every Career Stage
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Choose the plan that works best for you. All plans include our core features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-navy-800 border rounded-xl p-8 flex flex-col ${
                plan.popular
                  ? 'border-blue-500 shadow-2xl shadow-blue-500/20 scale-105'
                  : 'border-navy-700 hover:border-blue-500'
              } transition-all duration-300`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-bold text-white">{plan.price}</span>
                  {plan.period && (
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  )}
                </div>
              </div>

              {/* Features List */}
              <ul className="flex-1 space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                className={`w-full py-3 rounded-lg font-semibold transition-all transform hover:scale-105 ${
                  plan.ctaStyle === 'primary'
                    ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/50'
                    : 'bg-transparent border-2 border-navy-600 text-white hover:border-blue-500 hover:bg-navy-700'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">
            All plans include a 14-day money-back guarantee. No credit card required for Free plan.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <span className="flex items-center">
              <svg className="w-4 h-4 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Cancel anytime
            </span>
            <span className="flex items-center">
              <svg className="w-4 h-4 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Secure payment
            </span>
            <span className="flex items-center">
              <svg className="w-4 h-4 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              24/7 Support
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
