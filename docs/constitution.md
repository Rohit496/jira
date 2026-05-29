# Constitution: Delete Pagination in Employee

## 1. Code quality
- Code must be organized into small, focused modules to enhance readability and maintainability.
- All functions and methods should include type hints to improve clarity and type safety.
- Dead code must be removed to keep the codebase clean and efficient.
- Naming conventions should be clear and descriptive to ensure that code is self-explanatory.

## 2. Testing standards
- Unit tests are required for all pure logic to ensure correctness and reliability.
- A smoke import test must be included to verify that the application starts without errors.
- No flaky tests are allowed; all tests must produce consistent results.
- Only pytest should be used for testing to maintain uniformity in the testing framework.

## 3. User experience
- The user interface must be responsive to ensure a seamless experience across devices.
- Loading and error states should be clearly defined and communicated to users.
- Accessibility standards must meet at least AA compliance to ensure inclusivity for all users.
- Component patterns should be consistent throughout the application to provide a cohesive user experience.

## 4. Performance
- Payloads must be lightweight to optimize loading times and reduce bandwidth usage.
- Avoid unnecessary dependencies to keep the application lean and performant.
- API response times should be under 1 second for the 50th percentile (p50) to ensure a fast user experience.

## 5. Spec-kit discipline
- The pipeline executes in the following order: /speckit.specify → /speckit.plan → (Manager approval) → /speckit.tasks → /speckit.implement → tests → deploy.
- Every downstream artifact MUST trace back to the output of the previous stage to ensure traceability and accountability.