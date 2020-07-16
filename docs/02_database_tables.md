# Database Tables

## Families Table

Name: families
Fields:

- id

## Users Table

Name: users
Fields:

- family_id
- type_id
- name
- email
- password
- gold

## User Types Table

Name: user_types
Fields:

- id
- name

## Registration Codes Table

Name: registration_codes
Fields:

- id
- family_id
- user_type_id

## Quests Table

Name: quests
Fields:

- id
- family_id
- title
- description
- gold_amount
- parent_id
- stage_num
- assigned_user
- is_completed

## Quest Steps Table

Name: quest_steps
Fields:

- id
- quest_id
- description
- is_completed

## Quest Reviews Table

Name: quest_reviews
Fields: (use combined PK of user_id and quest_id)

- user_id
- quest_id
- rating

## Rewards Table

Name: rewards
Fields:

- id
- family_id
- name
- description
- cost
- icon
- icon_color
- created_by
- restricted

## Stores Table

Name: stores
Fields:

- id
- family_id
- user_id

## Store Rewards Table

Name: store_rewards
Fields: (use combined PK of store_id and reward_id)

- store_id
- reward_id
- quantity

## Store Discounts Table

Name: store_discounts
Fields:

- id
- store_id
- reward_id
- discount
- start_datetime
- end_datetime

## User Rewards

Name: user_rewards
Fields: (use combined PK of user_id and reward_id)

- user_id
- reward_id
- quantity