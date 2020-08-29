# Database Structure Notes

- title - string

- slug - string

- defined - boolean

- speech? - id association to part of speech lookup table (many-to-many) needs intermediary join table

- skip_in_table_of_contents - boolean

- sub_terms? - id association to sub term table (many-to-many) needs intermediary join table
  - text - string
  - full_title - string
- reading? - id association to reading table (many-to-many) needs intermediary join table
  - text - string
  - href - string
- flag? - id association to flag table (many-to-many) needs intermediary join table
  - level - id association to level lookup table
  - alt-for - string - not needed
  - text - string
  - type - id association to flag_type lookup table
- alt_words? (many-to-many) needs intermediary join table
  - type(change to speech?)? - id association to part of speech lookup table
  - text - string
- body? - large text
