
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Users, ChevronDown, Sparkles, TrendingUp, CreditCard, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-32 sm:w-72 h-32 sm:h-72 bg-gradient-to-r from-blue-400/20 sm:from-blue-400/30 to-purple-400/20 sm:to-purple-400/30 rounded-full blur-2xl sm:blur-3xl animate-float opacity-50 sm:opacity-70"></div>
        <div className="absolute top-20 sm:top-40 right-10 sm:right-20 w-48 sm:w-96 h-48 sm:h-96 bg-gradient-to-r from-indigo-400/20 sm:from-indigo-400/30 to-pink-400/20 sm:to-pink-400/30 rounded-full blur-2xl sm:blur-3xl animate-float-delayed opacity-40 sm:opacity-60"></div>
        <div className="absolute bottom-10 sm:bottom-20 left-1/4 w-32 sm:w-64 h-32 sm:h-64 bg-gradient-to-r from-green-400/15 sm:from-green-400/25 to-blue-400/15 sm:to-blue-400/25 rounded-full blur-xl sm:blur-3xl animate-pulse-slow opacity-30 sm:opacity-50"></div>
        <div className="absolute top-1/2 right-1/3 w-24 sm:w-48 h-24 sm:h-48 bg-gradient-to-r from-yellow-400/15 sm:from-yellow-400/20 to-orange-400/15 sm:to-orange-400/20 rounded-full blur-xl sm:blur-2xl animate-bounce-slow opacity-25 sm:opacity-40"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 lg:px-12 backdrop-blur-sm">
        <div className="flex items-center space-x-2 animate-slide-up">
          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center animate-glow">
            <span className="text-white font-bold text-xs sm:text-sm animate-pulse-slow">P</span>
          </div>
          <span className="text-lg sm:text-xl font-bold text-gray-900">PayFlow</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8 animate-fade-in animate-delay-200">
          <a href="#features" className="text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-105">Features</a>
          <a href="#security" className="text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-105">Security</a>
          <a href="#about" className="text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-105">About</a>
        </div>

        <div className="flex items-center space-x-2 sm:space-x-4 animate-slide-up animate-delay-100">
          <Link to="/signin">
            <Button variant="ghost" className="text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-105 text-sm sm:text-base px-2 sm:px-4">
              Sign In
            </Button>
          </Link>
          <Link to="/signup">
            <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white transition-all duration-300 hover:scale-105 hover:shadow-xl animate-glow text-sm sm:text-base px-3 sm:px-4">
              Get Started
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-12 pt-8 sm:pt-16 pb-12 sm:pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <div className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 text-xs sm:text-sm font-medium animate-shimmer border border-blue-200 hover:scale-105 transition-transform duration-300 animate-fade-in">
                  <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-2 animate-pulse" />
                  Lightning Fast Transfers
                  <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 ml-2 animate-bounce-slow" />
                </div>
                
                <div className="relative">
                  <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                    <span className="inline-block animate-slide-up animate-delay-200">Send Money</span>
                    <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-gradient animate-scale-in animate-delay-300">
                      Instantly
                    </span>
                    <span className="block animate-slide-up animate-delay-500">Anywhere</span>
                  </h1>
                  <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 animate-wiggle animate-delay-700">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce-slow">
                      <span className="text-xs sm:text-sm">⚡</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0 animate-slide-up animate-delay-700">
                  Transfer money to friends, family, and businesses with zero fees. 
                  <span className="font-semibold text-blue-600"> Secure, fast, and incredibly simple.</span>
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 animate-slide-up animate-delay-1000">
                <Link to="/signup" className="w-full sm:w-auto">
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto transition-all duration-500 hover:scale-110 hover:shadow-2xl animate-glow group">
                    Start Sending Money
                    <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto border-gray-300 hover:bg-gray-50 transition-all duration-300 hover:scale-105 hover:shadow-lg backdrop-blur-sm">
                  Learn More
                </Button>
              </div>

              {/* Enhanced Stats */}
              <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-6 sm:pt-8 border-t border-gray-200 animate-fade-in animate-delay-1000">
                <div className="text-center group cursor-pointer animate-slide-up animate-delay-1000">
                  <div className="text-lg sm:text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 animate-pulse-slow">$2.4B+</div>
                  <div className="text-xs sm:text-sm text-gray-600">Transferred</div>
                  <div className="w-6 sm:w-8 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="text-center group cursor-pointer animate-slide-up animate-delay-1000">
                  <div className="text-lg sm:text-2xl font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-300 animate-pulse-slow">500K+</div>
                  <div className="text-xs sm:text-sm text-gray-600">Users</div>
                  <div className="w-6 sm:w-8 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto mt-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="text-center group cursor-pointer animate-slide-up animate-delay-1000">
                  <div className="text-lg sm:text-2xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300 animate-pulse-slow">99.9%</div>
                  <div className="text-xs sm:text-sm text-gray-600">Uptime</div>
                  <div className="w-6 sm:w-8 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>

            {/* Enhanced Right Visual */}
            <div className="relative h-64 sm:h-96 lg:h-[600px] animate-scale-in animate-delay-500 mt-8 lg:mt-0">
              {/* Main Phone Mockup with enhanced animations */}
              <div className="absolute top-0 right-0 w-48 sm:w-64 lg:w-72 h-80 sm:h-96 lg:h-[500px] bg-gradient-to-b from-gray-900 to-gray-800 rounded-2xl sm:rounded-3xl lg:rounded-[3rem] p-1 sm:p-2 shadow-xl sm:shadow-2xl transform rotate-6 sm:rotate-12 hover:rotate-3 sm:hover:rotate-6 transition-all duration-700 hover:scale-105 animate-float group">
                <div className="w-full h-full bg-white rounded-xl sm:rounded-2xl lg:rounded-[2.5rem] overflow-hidden relative">
                  {/* Enhanced Phone Screen Content */}
                  <div className="p-3 sm:p-4 lg:p-6 space-y-2 sm:space-y-3 lg:space-y-4">
                    <div className="h-4 sm:h-6 lg:h-8 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-md sm:rounded-lg animate-gradient animate-shimmer"></div>
                    <div className="space-y-2 sm:space-y-3">
                      <div className="flex items-center justify-between p-2 sm:p-3 lg:p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg sm:rounded-xl hover:scale-105 transition-transform duration-300 animate-slide-up border border-green-100">
                        <div className="flex items-center space-x-2 sm:space-x-3">
                          <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full animate-pulse-slow"></div>
                          <div>
                            <div className="w-8 sm:w-12 lg:w-16 h-2 sm:h-2.5 lg:h-3 bg-gradient-to-r from-gray-300 to-gray-200 rounded animate-shimmer"></div>
                            <div className="w-6 sm:w-8 lg:w-12 h-1.5 sm:h-2 bg-gray-200 rounded mt-1"></div>
                          </div>
                        </div>
                        <div className="text-green-600 font-bold text-xs sm:text-sm lg:text-base animate-bounce-slow">+$125</div>
                      </div>
                      
                      <div className="flex items-center justify-between p-2 sm:p-3 lg:p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg sm:rounded-xl hover:scale-105 transition-transform duration-300 animate-slide-up animate-delay-200 border border-blue-100">
                        <div className="flex items-center space-x-2 sm:space-x-3">
                          <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full animate-pulse-slow"></div>
                          <div>
                            <div className="w-10 sm:w-14 lg:w-20 h-2 sm:h-2.5 lg:h-3 bg-gradient-to-r from-gray-300 to-gray-200 rounded animate-shimmer"></div>
                            <div className="w-8 sm:w-10 lg:w-16 h-1.5 sm:h-2 bg-gray-200 rounded mt-1"></div>
                          </div>
                        </div>
                        <div className="text-red-500 font-bold text-xs sm:text-sm lg:text-base animate-wiggle">-$75</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Phone screen glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl sm:rounded-2xl lg:rounded-[2.5rem]"></div>
                </div>
              </div>

              {/* Enhanced Card Mockup */}
              <div className="absolute bottom-0 left-0 w-56 sm:w-72 lg:w-80 h-32 sm:h-40 lg:h-48 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl transform -rotate-3 sm:-rotate-6 hover:rotate-0 transition-all duration-700 hover:scale-105 animate-float-delayed group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-glow"></div>
                <div className="relative p-3 sm:p-4 lg:p-6 text-white">
                  <div className="flex justify-between items-start mb-4 sm:mb-6 lg:mb-8">
                    <div className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded animate-rotate-slow"></div>
                    <div className="text-right">
                      <div className="text-xs opacity-60 animate-fade-in">BALANCE</div>
                      <div className="text-sm sm:text-lg lg:text-xl font-bold animate-pulse-slow">$2,847.50</div>
                    </div>
                  </div>
                  <div className="space-y-1 sm:space-y-2">
                    <div className="text-xs opacity-60">CARD NUMBER</div>
                    <div className="text-sm sm:text-base lg:text-lg font-mono">•••• •••• •••• 8294</div>
                  </div>
                </div>
              </div>

              {/* Enhanced Floating Elements */}
              <div className="absolute top-10 sm:top-16 lg:top-20 left-5 sm:left-8 lg:left-10 w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg animate-bounce-slow hover:scale-125 transition-transform duration-300 cursor-pointer group">
                <span className="text-white font-bold text-sm sm:text-lg lg:text-xl group-hover:animate-wiggle">$</span>
              </div>
              
              <div className="absolute bottom-20 sm:bottom-28 lg:bottom-32 right-6 sm:right-8 lg:right-12 w-6 h-6 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full shadow-lg animate-pulse-slow hover:scale-125 transition-transform duration-300 cursor-pointer animate-glow"></div>

              {/* Additional floating icons */}
              <div className="absolute top-16 sm:top-24 lg:top-32 right-12 sm:right-18 lg:right-24 w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center animate-float hover:scale-125 transition-transform duration-300 cursor-pointer">
                <CreditCard className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-white" />
              </div>

              <div className="absolute bottom-32 sm:bottom-40 lg:bottom-48 left-8 sm:left-12 lg:left-16 w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center animate-wiggle hover:scale-125 transition-transform duration-300 cursor-pointer">
                <Smartphone className="w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-4 lg:h-4 text-white" />
              </div>

              {/* Connecting lines animation */}
              <div className="absolute top-1/2 left-1/2 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 border-2 border-dashed border-blue-300/50 rounded-full animate-rotate-slow opacity-60"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="px-4 sm:px-6 lg:px-12 py-12 sm:py-18 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-8 sm:mb-12 lg:mb-16 animate-fade-in">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              Why Choose PayFlow?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Built for the modern world with security, speed, and simplicity at its core.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center space-y-4 p-4 sm:p-6 rounded-2xl hover:bg-gray-50 transition-colors animate-slide-up animate-delay-200">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto animate-glow">
                <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-white animate-bounce-slow" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900">Instant Transfers</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Send money in seconds, not days. Our advanced infrastructure ensures lightning-fast transactions.
              </p>
            </div>

            <div className="text-center space-y-4 p-4 sm:p-6 rounded-2xl hover:bg-gray-50 transition-colors animate-slide-up animate-delay-300">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto animate-glow">
                <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-white animate-pulse-slow" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900">Bank-Level Security</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Your money and data are protected with enterprise-grade encryption and security protocols.
              </p>
            </div>

            <div className="text-center space-y-4 p-4 sm:p-6 rounded-2xl hover:bg-gray-50 transition-colors animate-slide-up animate-delay-500">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto animate-glow">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-white animate-wiggle" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900">Easy Sharing</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Find friends, split bills, and manage group expenses with our intuitive user search.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-4 sm:px-6 lg:px-12 py-12 sm:py-18 lg:py-24 bg-gradient-to-r from-blue-600 to-indigo-600 animate-gradient">
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white animate-slide-up px-4">
            Ready to Transform How You Send Money?
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto animate-slide-up animate-delay-200 px-4">
            Join thousands of users who have already discovered the future of digital payments.
          </p>
          <Link to="/signup">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg animate-scale-in animate-delay-300 hover:scale-110 transition-all duration-300">
              Create Your Account
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="px-4 sm:px-6 lg:px-12 py-8 sm:py-12 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto text-center animate-fade-in">
          <div className="flex items-center justify-center space-x-2 mb-6 sm:mb-8">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center animate-glow">
              <span className="text-white font-bold text-xs sm:text-sm animate-pulse-slow">P</span>
            </div>
            <span className="text-lg sm:text-xl font-bold">PayFlow</span>
          </div>
          <p className="text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base">
            The future of digital payments, today.
          </p>
          <div className="border-t border-gray-800 pt-6 sm:pt-8">
            <p className="text-gray-500 text-xs sm:text-sm">
              © 2024 PayFlow. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
