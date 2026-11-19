import { Component } from "react";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Application error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            padding: "2rem",
            fontFamily: "Outfit, sans-serif",
            maxWidth: "600px",
            margin: "3rem auto",
            background: "#ffffff",
            borderRadius: "1rem",
            border: "1px solid rgba(23, 36, 30, 0.15)",
            boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
          }}
        >
          <h2 style={{ color: "#dc2626", marginTop: 0 }}>Something went wrong</h2>
          <p style={{ color: "#4c5c53", lineHeight: 1.5 }}>
            The application encountered a runtime error while rendering:
          </p>
          <pre
            style={{
              background: "#fef2f2",
              padding: "1rem",
              borderRadius: "0.5rem",
              overflowX: "auto",
              color: "#991b1b",
              fontSize: "0.85rem",
              fontFamily: "monospace",
            }}
          >
            {this.state.error?.message || String(this.state.error)}
          </pre>
          <button
            onClick={() => window.location.reload()}
            style={{
              marginTop: "1rem",
              padding: "0.65rem 1.4rem",
              background: "#17241e",
              color: "#ffffff",
              border: "none",
              borderRadius: "999px",
              cursor: "pointer",
              fontWeight: 600,
              fontFamily: "inherit",
            }}
          >
            Reload application
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
