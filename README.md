
# Opiniion QA Challenge

A QA challenge to be used during the interview process.




## Tasks

[Challenge Site](https://opiniionqachallenge.up.railway.app/)

NOTE: All data is static and will revert if the page is refreshed.

### User Info Card

We need a user info card for our User Profile page. It should inlcude the following:
- The user's name and role.
- Fields for their first and last name, email, and phone number.
    - These fields should be disabled when just viewing the profile.
- An edit button that unlocks the fields for editing.
- In edit mode, we need to be able to update the first and last name, email, phone number, and role.
- In edit mode, the edit button should be replaced by save and cancel buttons.


### User Locations Card

We need a user locations card for our User Profile page. It should inlcude the following:
- A list of all locations currently assigned to the user, including name and role.
    - The role should match the role assigned to the user.
- A search bar to filter the list of locations.
- An add locations button that adds a new row to be filled out.
- All locations must have a unique name.
- When adding a location, the add location button should be replaced by save and cancel buttons.
- All locations should also have a delete button to remove them from the list.

## Issues

### User Info Card

- **In edit mode, there is no way to change the user's role.**
- **Clicking save does nothing, but throws an error in the console.**
- Clicking cancel does not revert any changes made.
- The edit button is 5px larger than the rest of the buttons.
- Bonus points if they ask if the phone number and email are being checked for actual phone numbers and emails.

### User Locations Card

- **Nothing enforces locations to have unique names.**
- Locations can be added with blank or poorly cased names.
- The cancel button has 5px extra space than the rest of the buttons.
- The search bar is case sensitive (a poor user experience).
- The delete button should have a cursor pointer. Bonus points if they suggest an icon.
