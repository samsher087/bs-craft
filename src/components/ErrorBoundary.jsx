import React from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Component Error caught by ErrorBoundary:", error, errorInfo);
  }

  handleReload = () => {
    this.setState({ hasError: false, error: null });
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#0B0B0B] text-[#F8F5EF] flex items-center justify-center p-6 text-center">
          <div className="max-w-md p-8 rounded-3xl bg-[#171717] border border-[#D4AF37]/30 shadow-2xl space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-[#075B3A]/30 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] mx-auto">
              <AlertCircle className="w-7 h-7" />
            </div>
            <h2 className="font-serif text-2xl font-bold text-[#F8F5EF]">
              Display Notice
            </h2>
            <p className="text-xs text-[#F8F5EF]/75 font-sans leading-relaxed">
              We encountered a minor render issue while loading this view. Click below to reload.
            </p>
            <button
              onClick={this.handleReload}
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#E0C061] text-[#0B0B0B] font-bold text-xs uppercase tracking-wider shadow-md hover:scale-105 transition-all inline-flex items-center gap-2 cursor-pointer"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Reload Page</span>
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
