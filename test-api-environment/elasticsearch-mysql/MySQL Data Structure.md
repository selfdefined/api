# MySQL Data Structure
![MySQL ER Diagram for ](https://user-images.githubusercontent.com/11299714/91647707-aa8e8800-ea12-11ea-8a77-a17f0b171dbc.png)
[Self Defined API MySQL Workbench ER Diagram Zip File](https://github.com/selfdefined/web-app/files/5146104/Self.Defined.API.mwb.zip)

## Diagram Key

|                             Key                              | Description                                                  |
| :----------------------------------------------------------: | ------------------------------------------------------------ |
| ![1-to-Many Identifying Relationship](https://user-images.githubusercontent.com/11299714/91647201-d4dd4700-ea0c-11ea-9cc2-5e85a2e2c6a3.png) | This indicates that the table to which it is attached has entries that are related to many entries in another table. It also indicates that it is an identifying relationship. [Defintion](https://www.datanamic.com/support/relationshiptypes.html) |
| ![1-to-Many Non-Identifying Relationship](https://user-images.githubusercontent.com/11299714/91647213-f5a59c80-ea0c-11ea-953f-7d8062baf725.png) | This indicates that the table to which it is attached has entries that are related to many entries in another table. It also indicates that it is an non-identifying relationship. [Defintion](https://www.datanamic.com/support/relationshiptypes.html) |



## Database Structure

The databse structure displayed above can be broken down into 4 grouping which are displayed in columns from left to right.

They are:

1. Words table to which all other data is related. Each row here is equivalent to a markdown file in the definitions folder.
2. The second column of tables provides a many-to-many relationship between the Words and the third column of tables. An example of this relationship would be that the Words table could have many AltWords and an AltWords could have many Words attached to it.
3. The third column of tables is list of additional data that can be shared by words.
4. The fourth column of tables is lists that provide additional data that can be shared by the items in their table in the third column

### Access Methodology

This data structure would allow us to access words in the following manner.

1. Words can be accessed directly either through their unique ID or unique Slug.
2. Words can be search by their title, defined status, body or excerpt.
3. The second column of tables provides relationship access from either the Words or from the third column of tables.
4. The third column of tables can be directly accessed by their unique ID or unique slug. The through the second column of tables words can be found that related to those items.
5. The third column of tables could also be searched by any of their VARCHAR text fields and related words found that way.
6. The fourth column of tables can be directly accessed by their unique ID or unique slug. Then you can access their related items in the third column in tables that in turn can access their related words through the second column of tables.
7. The fourth column of tables can also be searched by their VARCHAR text fields. This provides the same access methods as line 6.

The API would handle precisely how we will allow end users to access the data but this is all the possible ways the data could potentially be accessed.

### Reasons for Splitting Up the Word Data into Different Tables

Putting things like AltWords, Flags, Readings, Speech Parts, and Sub Terms into their own tables allows us to maintain a master list of these items. This would allow content contributors to auto complete search the items and assign them to a word. This also means that there would only ever be 1 copy of each unique item in these tables. This way we would easily be able to modify an existing one and it would be updated for all words it was associated to.

The same applies for the associations for Alt Word Groups, Flag Levels and Flag Types.

These master lists are able to be added to in whatever method we determine. Also, each of these tables relationships to a word is optional. We can make them required on the front end if necessary.