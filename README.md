# MoneyLog 💰🪵
Log your money

# Motivations
- Implement what I've learned so far from my work
- Track my expense
- Side project
- Hopefully it can be a side hustle

# Ideas
- Web app using React as front-end
- Customize Schema
- Input using web app
- PostgreSQL to store the record
  Still deciding on this one. I'd like to use SQLite.
- Back-end is Rest API
- Show charts
- Drilldown chart

# Notes
Ideally, there is an engine (or parser) to parse PDF file.
It read PDF file as an input, parse it and *intelligently* get the data
from the table inside of it. Once it get the data, it will store it to the database.

Now this is **hard**. It should somehow know how to parse the PDF and get the data correctly.
I've been digging about this for quite sometime and I still couldn't find anything
that come close to it.

So, instead of being stuck finding the engine (or parser), I started thinking about the front-end.

### Front End
For the front-end, there are a lot of option that I could use to build it.  
But I have most experience with [antd](https://ant.design/ "antd").  
Laying foundation for the front-end is quite challenging, since I also want to support customize theme  
for my front-end.  
I also have some experience with [styled-component](https://styled-components.com/ "styled-component").  
I found using *styled-component* make styling component easier.

On the current project, I always said to my team that styling the component will always the hardest part for me.  
While working on component logic and business logic shouldn't be too hard for me.
