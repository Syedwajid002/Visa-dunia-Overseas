import React from "react";
import { Link } from "react-router-dom";
import {
  Gift,
  Users,
  DollarSign,
  ArrowRight,
  CheckCircle,
  Trophy,
  TrendingUp,
  UserPlus,
} from "lucide-react";

const ReferEarn = () => {
  const benefits = [
    {
      icon: <DollarSign className="h-12 w-12 text-green-500" />,
      title: "₹25,000 Cash Reward",
      description:
        "Earn ₹25,000 for every successful referral who enrolls with us",
      highlight: true,
    },
    {
      icon: <Gift className="h-12 w-12 text-purple-500" />,
      title: "Special Bonuses",
      description: "Additional rewards for multiple referrals in a month",
      highlight: false,
    },
    {
      icon: <Trophy className="h-12 w-12 text-[#035079]" />,
      title: "Recognition Program",
      description:
        "Top referrers get special recognition and exclusive benefits",
      highlight: false,
    },
    {
      icon: <UserPlus className="h-12 w-12 text-[#035079]" />,
      title: "Lifetime Program",
      description: "No expiry date - earn rewards for life with every referral",
      highlight: false,
    },
  ];

  const howItWorks = [
    {
      step: "01",
      title: "Refer a Friend",
      description:
        "Share Visa Dunia Overseas with friends who want to study abroad",
      icon: <Users className="h-8 w-8 text-white" />,
    },
    {
      step: "02",
      title: "They Enroll",
      description:
        "Your friend enrolls for our services and mentions your name",
      icon: <UserPlus className="h-8 w-8 text-white" />,
    },
    {
      step: "03",
      title: "You Earn",
      description: "Receive your cash reward once they complete enrollment",
      icon: <DollarSign className="h-8 w-8 text-white" />,
    },
  ];

  const rewardTiers = [
    {
      tier: "Bronze",
      referrals: "1-3 referrals",
      reward: "₹25,000 each",
      bonus: "None",
      color: "bg-amber-100 border-amber-300",
    },
    {
      tier: "Silver",
      referrals: "4-6 referrals",
      reward: "₹25,000 each",
      bonus: "₹10,000 bonus",
      color: "bg-gray-100 border-gray-300",
    },
    {
      tier: "Gold",
      referrals: "7-10 referrals",
      reward: "₹25,000 each",
      bonus: "₹25,000 bonus",
      color: "bg-yellow-100 border-yellow-300",
    },
    {
      tier: "Platinum",
      referrals: "10+ referrals",
      reward: "₹25,000 each",
      bonus: "₹50,000 bonus",
      color: "bg-purple-100 border-purple-300",
    },
  ];

  const faqs = [
    {
      question: "How do I refer someone?",
      answer:
        "Simply share our contact information with your friend and ask them to mention your name when they contact us or during enrollment.",
    },
    {
      question: "When do I receive my reward?",
      answer:
        "You receive your reward within 30 days of your friend's successful enrollment and payment of fees.",
    },
    {
      question: "Is there a limit to referrals?",
      answer:
        "No limit! You can refer as many friends as you want and earn rewards for each successful referral.",
    },
    {
      question: "What services qualify for referral rewards?",
      answer:
        "All our services including admission guidance, visa assistance, test preparation, and immigration services qualify.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#035079] to-[#024461] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Refer & Earn Program
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
              Help your friends achieve their study abroad dreams and earn
              generous rewards for every successful referral.
            </p>
            <div className="bg-white bg-opacity-20 inline-block px-8 py-4 rounded-lg mb-8">
              <div className="text-3xl lg:text-4xl font-bold text-yellow-300">
                ₹25,000
              </div>
              <div className="text-blue-100">Per Successful Referral</div>
            </div>
            <br />
            <Link
              to="/contact"
              className="bg-white text-[#035079] hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center"
            >
              Start Referring Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Program Benefits
            </h2>
            <p className="text-xl text-gray-600">
              Generous rewards and exciting benefits await you
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`p-8 rounded-xl text-center transition-shadow hover:shadow-xl ${
                  benefit.highlight
                    ? "bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-300"
                    : "bg-gray-50 border border-gray-200"
                }`}
              >
                <div className="flex justify-center mb-6">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
                {benefit.highlight && (
                  <div className="mt-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Simple 3-step process to start earning
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-[#035079] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <div className="flex justify-center mb-4 text-[#035079]">
                  {React.cloneElement(step.icon, {
                    className: "h-8 w-8 text-[#035079]",
                  })}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reward Tiers */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Reward Tiers
            </h2>
            <p className="text-xl text-gray-600">
              Earn more with multiple referrals
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {rewardTiers.map((tier, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg border-2 ${tier.color} text-center hover:shadow-lg transition-shadow`}
              >
                <div className="text-2xl font-bold text-gray-900 mb-2">
                  {tier.tier}
                </div>
                <div className="text-gray-600 mb-4">{tier.referrals}</div>
                <div className="space-y-2">
                  <div className="text-lg font-semibold text-gray-900">
                    {tier.reward}
                  </div>
                  <div className="text-[#035079] font-semibold">
                    {tier.bonus}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#035079] to-[#024461]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Start Earning Today!
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join our referral program and start earning generous rewards while
            helping friends achieve their dreams.
          </p>
          <Link
            to="/contact"
            className="bg-white text-[#035079] hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center"
          >
            Join Refer & Earn Program
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ReferEarn;
