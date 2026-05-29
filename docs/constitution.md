# Constitution: Fix Pagination Position in Employee Table

## 1. Code quality
- Code must be organized into small, focused modules to enhance readability and maintainability.
- All functions and variables should include type hints to improve clarity and reduce errors.
- Dead code must be removed to keep the codebase clean and efficient.
- Naming conventions should be clear and descriptive to convey the purpose of variables and functions.

## 2. Testing standards
- Unit tests must be implemented for all pure logic to ensure correctness and reliability.
- A smoke import test is required to verify that the pagination component integrates correctly with the employee table.
- No flaky tests are allowed; all tests must produce consistent results.
- Only pytest should be used for testing to maintain uniformity in the testing framework.

## 3. User experience
- The pagination UI must be responsive to ensure usability across different devices and screen sizes.
- Loading and error states must be clearly defined and displayed to enhance user feedback during interactions.
- Accessibility standards must meet at least AA compliance to ensure inclusivity for all users.
- Consistent component patterns should be followed to provide a cohesive user experience throughout the application.

## 4. Performance
- Payloads must be lightweight to optimize loading times and improve user experience.
- Unnecessary dependencies should be avoided to reduce bloat and enhance performance.
- API response times should target a p50 latency of less than 1 second to ensure quick interactions.

## 5. Spec-kit discipline
- The pipeline executes in the following order: /speckit.specify → /speckit.plan → (Manager approval) → /speckit.tasks → /speckit.implement → tests → deploy.
- Every downstream artifact MUST trace back to the output of the previous stage to maintain traceability and accountability.