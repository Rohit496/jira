# Constitution: Delete Pagination in Employee

## 1. Code quality
- Code must be organized into small, focused modules to enhance readability and maintainability.
- All functions and methods should include type hints for clarity and type safety.
- Dead code must be removed to keep the codebase clean and efficient.
- Naming conventions should be clear and descriptive to convey the purpose of variables and functions.

## 2. Testing standards
- Unit tests are required for all pure logic to ensure correctness and reliability.
- A smoke import test must be included to verify that the application starts without errors.
- No flaky tests are allowed; all tests should produce consistent results.
- Only pytest should be used for testing to maintain uniformity in the testing framework.

## 3. User experience
- The user interface must be responsive to ensure usability across various devices and screen sizes.
- Loading and error states should be clearly defined and communicated to the user.
- The application must meet accessibility standards at least at the AA level to accommodate all users.
- Consistent component patterns should be followed to provide a cohesive user experience.

## 4. Performance
- Payloads must be lightweight to optimize loading times and enhance user experience.
- Avoid unnecessary dependencies to reduce bloat and improve performance.
- API response times should be optimized to ensure that the p50 latency is under 1 second.

## 5. Spec-kit discipline
- The pipeline executes in the following order: /speckit.specify → /speckit.plan → (Manager approval) → /speckit.tasks → /speckit.implement → tests → deploy.
- Every downstream artifact MUST trace back to the output of the previous stage to ensure traceability and accountability.