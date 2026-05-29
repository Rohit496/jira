# Constitution: Fix the Pagination Position in Middle

## 1. Code quality
- Code must be organized into small, focused modules to enhance readability and maintainability.
- Use type hints consistently to improve code clarity and facilitate easier debugging.
- Eliminate any dead code to ensure a clean and efficient codebase.
- Adopt clear and descriptive naming conventions for variables, functions, and classes to enhance understanding.

## 2. Testing standards
- Implement unit tests for all pure logic components to ensure correctness and reliability.
- A smoke import test is required to verify that the pagination feature integrates correctly within the application.
- Ensure that all tests are stable and do not produce flaky results that could lead to inconsistent outcomes.
- Utilize pytest exclusively for testing to maintain consistency in the testing framework.

## 3. User experience
- Ensure the pagination UI is responsive across all devices and screen sizes for optimal user interaction.
- Include loading and error states to inform users of the current status of data fetching and handle errors gracefully.
- Adhere to accessibility standards at the AA level to ensure the feature is usable by all individuals, including those with disabilities.
- Maintain consistent component patterns throughout the application to provide a cohesive user experience.

## 4. Performance
- Optimize for lightweight payloads to reduce load times and improve overall performance.
- Avoid unnecessary dependencies that could bloat the application and slow down performance.
- Ensure that the p50 API response time is under 1 second to meet user expectations for speed.

## 5. Spec-kit discipline
- The pipeline executes in the following order: /speckit.specify → /speckit.plan → (Manager approval) → /speckit.tasks → /speckit.implement → tests → deploy.
- Every downstream artifact MUST trace back to the output of the previous stage to ensure traceability and accountability throughout the development process.