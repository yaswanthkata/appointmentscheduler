import { Doctor } from "../types/Doctor";

export const MockDoctor: Doctor = {
  profile: {
    name: "Léa Pereira",
    rating: 4,
    location: "Lisbon",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a mauris
    laoreet, accumsan magna sit amet, dapibus augue. Donec enim dolor,
    luctus in faucibus eu, viverra sit amet dolor. Proin eu viverra mi, ac
    consectetur nunc. Ut aliquet diam nec sem sodales, vitae hendrerit purus
    finibus. Nulla posuere ac neque sed vestibulum. Nullam et euismod risus.
    Nam ac dignissim justo. Vestibulum volutpat maximus orci nec ultricies.`,
    thumbnail:
      "https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces",
    rate: "$150",
    specialization: "PSICOLOGIST"
  },
  availableDays: [
    {
      calendarDay: "2019-08-25",
      slots: [
        { time: "2019-08-25T08:00:00+0530", isAvailable: false },
        { time: "2019-08-25T08:30:00+0530", isAvailable: false },
        { time: "2019-08-25T09:00:00+0530", isAvailable: false },
        { time: "2019-08-25T09:30:00+0530", isAvailable: false },
        { time: "2019-08-25T10:00:00+0530", isAvailable: false }
      ]
    },
    {
      calendarDay: "2019-08-26",
      slots: [
        { time: "2019-08-26T08:00:00+0530", isAvailable: true },
        { time: "2019-08-26T08:30:00+0530", isAvailable: true },
        { time: "2019-08-26T09:00:00+0530", isAvailable: true },
        { time: "2019-08-26T09:30:00+0530", isAvailable: true },
        { time: "2019-08-26T10:00:00+0530", isAvailable: true }
      ]
    },
    {
      calendarDay: "2019-08-27",
      slots: [
        { time: "2019-08-27T08:00:00+0530", isAvailable: true },
        { time: "2019-08-27T08:30:00+0530", isAvailable: true },
        { time: "2019-08-27T09:00:00+0530", isAvailable: true },
        { time: "2019-08-27T09:30:00+0530", isAvailable: true },
        { time: "2019-08-27T10:00:00+0530", isAvailable: true }
      ]
    },
    {
      calendarDay: "2019-08-28",
      slots: [
        { time: "2019-08-28T08:00:00+0530", isAvailable: true },
        { time: "2019-08-28T08:30:00+0530", isAvailable: true },
        { time: "2019-08-28T09:00:00+0530", isAvailable: true },
        { time: "2019-08-28T09:30:00+0530", isAvailable: true },
        { time: "2019-08-28T10:00:00+0530", isAvailable: true }
      ]
    },
    {
      calendarDay: "2019-08-29",
      slots: [
        { time: "2019-08-29T08:00:00+0530", isAvailable: true },
        { time: "2019-08-29T08:30:00+0530", isAvailable: true },
        { time: "2019-08-29T09:00:00+0530", isAvailable: true },
        { time: "2019-08-29T09:30:00+0530", isAvailable: true },
        { time: "2019-08-29T10:00:00+0530", isAvailable: true }
      ]
    }
  ]
};
