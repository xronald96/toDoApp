import React from 'react';

class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false, error: null };
	}

	static getDerivedStateFromError(error) {
		return { hasError: true, error };
	}

	render() {
		if (this.state.hasError) {
			return (
				<div style={{ padding: 20, color: 'red' }}>
					<h2>404 contact with Ronald</h2>
					<details style={{ whiteSpace: 'pre-wrap' }}>
						{this.state.error && this.state.error.toString()}
					</details>
				</div>
			);
		}
		return this.props.children;
	}
}

export default ErrorBoundary;
