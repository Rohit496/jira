# Constitution: Delete the Pagination in Employee

## 1. Code quality
- Code must be modular and focused on single responsibilities.
- Utilize type hints for all function signatures to enhance readability and maintainability.
- Ensure there is no dead code; remove any unused functions or variables.
- Use clear and descriptive naming conventions for variables and functions to improve code clarity.

## 2. Testing standards
- Implement unit tests for all pure logic components to ensure correctness.
- A smoke import test is required to verify that the application starts without errors.
- Ensure that all tests are stable and do not produce flaky results.
- Use pytest as the exclusive testing framework for consistency and reliability.

## 3. User experience
- Ensure the user interface is responsive across all devices and screen sizes.
- Implement loading and error states to provide feedback during data fetching.
- Adhere to accessibility standards at least at the AA level to ensure inclusivity.
- Maintain consistent patterns in component design to enhance usability and familiarity.

## 4. Performance
- Optimize payloads to be lightweight, minimizing data transfer and improving load times.
- Avoid unnecessary dependencies that could bloat the application size and impact performance.
- Ensure that the p50 API response time is under 1 second to provide a smooth user experience.

## 5. Spec-kit discipline
- The pipeline must execute in the following order: /speckit.specify → /speckit.plan → (Manager approval) → /speckit.tasks → /speckit.implement → tests → deploy.
- Every downstream artifact must trace back to the output of the previous stage to ensure accountability and traceability throughout the development process.