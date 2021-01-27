
1) rails new open-flights --webpack=react --database=postgresql -T

2) rails db:create

3) rails g model Airline name image_url slug

4) rails g model Review title description score:integer airline:belongs_to

5) rails db:migrate

6) rails db:seed

7) rails g serializer Airline name image_url slug

8) rails g serializer Review title description score airline_id

9) yarn add react-router-dom

