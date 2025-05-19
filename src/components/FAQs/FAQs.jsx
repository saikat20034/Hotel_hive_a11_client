

const faqs = [
  {
    question: 'What is your cancellation policy?',
    answer:
      'You can cancel your booking free of charge up to 48 hours before check-in.',
  },
  {
    question: 'Do you offer airport pickup?',
    answer:
      'Yes, we provide complimentary airport pickup. Please mention it during booking.',
  },
  {
    question: 'Is breakfast included in the booking?',
    answer: 'Yes, all bookings include a complimentary breakfast buffet.',
  },
  {
    question: 'Do you allow pets?',
    answer:
      'Unfortunately, pets are not allowed in our hotel for safety and hygiene reasons.',
  },
];

const FAQs = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl text-black md:text-4xl lg:text-5xl font-semibold lg:font-extrabold text-center mb-10">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              className="collapse collapse-arrow bg-base-100 shadow"
              key={index}
            >
              <input type="checkbox" />
              <div className="collapse-title text-lg font-medium">
                {faq.question}
              </div>
              <div className="collapse-content text-sm text-gray-600">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
