# Constitution: Fix the Pagination Design

## 1. Code quality
- Ensure small, focused modules for pagination components.
- Use type hints for all functions and components related to pagination.
- Eliminate any dead code related to previous pagination implementations.
- Maintain clear and descriptive naming conventions for all pagination-related variables and functions.

## 2. Testing standards
- Implement unit tests for all pagination logic to ensure correctness.
- Include a smoke import test to verify that the pagination component loads correctly.
- Ensure that all tests are stable and do not produce flaky results.
- Use pytest exclusively for testing the pagination functionality.

## 3. User experience
- Design a responsive UI for pagination that adapts to different screen sizes.
- Clearly indicate loading and error states during pagination actions.
- Adhere to accessibility standards at least at the AA level for all pagination elements.
- Maintain consistent component patterns across pagination and related UI elements.

## 4. Performance
- Optimize pagination for lightweight payloads to enhance loading speed.
- Avoid unnecessary dependencies that could bloat the pagination component.
- Ensure that the API response time for pagination is under 1 second for the 50th percentile (p50).

## 5. Spec-kit discipline
- The pipeline executes /speckit.specify → /speckit.plan → (Manager approval) → /speckit.tasks → /speckit.implement → tests → deploy.
- Every downstream artifact related to the pagination design MUST trace back to the output of the previous stage, ensuring a clear lineage of changes and enhancements.