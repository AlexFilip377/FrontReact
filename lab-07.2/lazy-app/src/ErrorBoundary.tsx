import { Component } from "react";
import type { ReactNode, ErrorInfo } from "react";

interface Props {
    children: ReactNode;
    fallback: ReactNode;
}

interface State {
    hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(_: Error): State {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("ErrorBoundary caught an error:", error, errorInfo);
    }

    resetError = () => {
        this.setState({ hasError: false });
    };

    render() {
        if (this.state.hasError) {
            return (
                <div style={{ padding: '20px', textAlign: 'center', border: '2px solid red', borderRadius: '8px' }}>
                    {this.props.fallback}
                    <button
                        onClick={this.resetError}
                        style={{ marginTop: '10px', padding: '8px 16px', cursor: 'pointer' }}
                    >
                        Попробовать еще раз
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;