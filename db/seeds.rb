# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#

airlines = Airline.create([
    {
        name: "United Airlines",
        image_url: "https://cdn.travelpulse.com/images/b9e255de-2a5f-e111-b505-001a4bd1ca5c/4c3a6f15-4b8f-4b57-8f48-380aa1e9dc4c/500x309.png"
    },
    {
        name: "Southwest",
        image_url: "https://photos.prnewswire.com/prnfull/20010724/SWALOGO"
    },
    {
        name: "Delta",
        image_url: "https://i.pinimg.com/originals/ad/95/c6/ad95c6cd63ef26e7be9383221b1d5578.png"
    }
])

reviews = Review.create([
    {
        title: "Great airline",
        description: "I had a lovely time",
        score: 5,
        airline: airlines.first
    },
    {
        title: "Bad airline",
        description: "I had a bad time",
        score: 1,
        airline: airlines.first
    }
])
