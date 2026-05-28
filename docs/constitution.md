# Constitution: Modal Confirmation for Employee Deletion

## 1. Code quality
- Code must be organized into small, focused modules to enhance readability and maintainability.
- All functions and variables should include type hints to improve clarity and reduce errors.
- Dead code must be removed to maintain a clean codebase.
- Naming conventions should be clear and descriptive to convey the purpose of functions and variables.

## 2. Testing standards
- Unit tests are required for all pure logic to ensure correctness and reliability.
- A smoke import test must be implemented to verify that the modal confirmation component loads correctly.
- All tests must be stable and non-flaky to ensure consistent results.
- Only pytest should be used as the testing framework for this project.

## 3. User experience
- The modal confirmation must provide a responsive UI that adapts to different screen sizes.
- Clear loading and error states must be implemented to inform users of the current action and any issues.
- The component must meet accessibility standards at least at the AA level to ensure usability for all users.
- Consistent component patterns should be followed to maintain a cohesive user experience across the application.

## 4. Performance
- Payloads sent to the server must be lightweight to optimize performance and reduce load times.
- Unnecessary dependencies should be avoided to keep the application lean and efficient.
- The API response time must be under 1 second for the 50th percentile (p50) to ensure a smooth user experience.

## 5. Spec-kit discipline
- The pipeline executes in the following order: /speckit.specify → /speckit.plan → (Manager approval) → /speckit.tasks → /speckit.implement → tests → deploy.
- Every downstream artifact MUST trace back to the output of the previous stage to ensure traceability and accountability.