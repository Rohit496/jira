# Constitution: Employee Pagination

## 1. Code quality
- Code must be organized into small, focused modules to enhance readability and maintainability.
- All functions and variables should include type hints to improve clarity and reduce errors.
- Dead code must be removed to keep the codebase clean and efficient.
- Naming conventions should be clear and descriptive, making it easy to understand the purpose of each component.

## 2. Testing standards
- Unit tests are required for all pure logic to ensure correctness and reliability.
- A smoke import test must be included to verify that the pagination component integrates correctly within the application.
- No flaky tests are allowed; all tests should produce consistent results.
- Only pytest should be used as the testing framework to maintain uniformity.

## 3. User experience
- The pagination UI must be responsive, ensuring usability across various devices and screen sizes.
- Loading and error states should be clearly defined and implemented to enhance user feedback during data retrieval.
- Accessibility standards must meet AA compliance to ensure inclusivity for all users.
- Consistent component patterns should be followed to provide a cohesive user experience throughout the application.

## 4. Performance
- Payloads sent to the client should be lightweight to minimize load times and improve performance.
- Unnecessary dependencies should be avoided to reduce the overall size of the application and enhance maintainability.
- API response times should be optimized to achieve a p50 response time of less than 1 second.

## 5. Spec-kit discipline
- The pipeline executes in the following order: /speckit.specify → /speckit.plan → (Manager approval) → /speckit.tasks → /speckit.implement → tests → deploy.
- Every downstream artifact MUST trace back to the previous stage's output to ensure traceability and accountability throughout the development process.