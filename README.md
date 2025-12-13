# Chef-s-Court-of-Justice

Objective:
Build a backend for Chef’s Court of Justice, a system where users can upload arguments & evidence, review them, and vote on verdicts.

Core Requirements:
Authentication - Login / Signup, assign user role. 
Arguments & Evidence - Upload(plaintext) by defendant/plaintiff.
Judge Powers: judge can view, update and delete the arguments.


Brownie Points:
Make judge approval mandatory to approve defendant arguments/evidence
Jury Voting - Jurors vote once per case; tally votes for guilty/not guilty
Access Control - Role-based route protection
Upload documents by defendants/plaintiffs.

User Roles & Capabilities:
Defendant / Plaintiff: Upload arguments & evidence. 
Juror: View all approved arguments, filter by defendant/plaintiff name, vote guilty/not guilty
Judge: Edit, approve, or reject any argument/evidence



Suggested API Endpoints:


Core Requirements:
POST /auth/signup - Public - Register user
POST /auth/login - Public - Authenticate user
POST /case/submit - Defendant / Plaintiff - Upload argument + evidence
GET /case/all - All roles - View all submissions
PATCH /case/edit/:id - Judge - Edit a submission
DELETE /case/delete/:id: Judge - Edit a submission

Brownie Points:


GET /case/by-name/:name - Juror - Filter submissions by defendant/plaintiff
PATCH /case/approve/:id - Judge - Approve a submission
PATCH /case/reject/:id - Judge - Reject a submission
POST /jury/vote/:caseId - Juror - Vote guilty / not guilty
GET /jury/results/:caseId - Judge / Juror - View total vote results

