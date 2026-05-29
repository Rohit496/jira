# Constitution: Fix the Pagination Design

## 1. Code quality
- Use small, focused modules to enhance readability and maintainability.
- Implement type hints for better code clarity and error prevention.
- Eliminate any dead code to ensure a clean codebase.
- Adopt clear and descriptive naming conventions for functions and variables.

## 2. Testing standards
- Write unit tests for all pure logic to ensure functionality and prevent regressions.
- Include a smoke import test to verify the pagination component's integration.
- Ensure no flaky tests are present to maintain reliability in the testing suite.
- Utilize pytest as the exclusive testing framework for consistency.

## 3. User experience
- Design a responsive UI that adapts seamlessly across different devices and screen sizes.
- Implement loading and error states to provide feedback during data fetching.
- Adhere to accessibility standards at the AA level to ensure usability for all users.
- Maintain consistent component patterns to enhance familiarity and usability.

## 4. Performance
- Ensure lightweight payloads to optimize loading times and user experience.
- Avoid unnecessary dependencies that could bloat the application.
- Aim for a p50 API response time of less than 1 second to ensure quick interactions.

## 5. Spec-kit discipline
- The pipeline executes in the following order: /speckit.specify → /speckit.plan → (Manager approval) → /speckit.tasks → /speckit.implement → tests → deploy.
- Every downstream artifact MUST trace back to the output of the previous stage to maintain traceability and accountability.