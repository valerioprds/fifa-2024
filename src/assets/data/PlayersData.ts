import { EPosition } from '../../app/modules/core/enums/EPosition.enum';
import { IPlayer } from '../../app/modules/core/models/IPlayer.interface';

export const playersData: IPlayer[] = [
  {
    id: crypto.randomUUID(),
    name: 'Kylian Mbappe',
    age: 24,
    nationality: 'French',
    height: 178,
    weight: 73,
    position: EPosition.FORWARD,
    club: 'Paris Saint-Germain',
    number: 7,
    imgUrl:
      'https://imgs.search.brave.com/WZ12aL01zf_hVEEIKO82L-WDWsQMdaK6a7SKrwR83xk/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQva3lsaWFuLW1i/YXBwZS1jeW5zZXNx/ejM0azUzOHdmLmpw/Zw',
    videosUrl: [
      'https://www.youtube.com/shorts/lYH1zm_qcwY',
      'https://www.youtube.com/shorts/BkX0dvLBzf0',
      'https://www.youtube.com/shorts/a7BOwi0ikV4',
    ],
    attributes: {
      pace: {
        acceleration: 99,
        sprintSpeed: 99,
      },
      shooting: {
        attPosition: 99,
        finishing: 99,
        shotPower: 96,
        longShots: 89,
        volleys: 90,
        penalties: 90,
      },
      passing: {
        vision: 91,
        crossing: 85,
        fkAcc: 75,
        shortPass: 95,
        longPass: 78,
        curve: 88,
      },
      dribbling: {
        agility: 98,
        balance: 86,
        reactions: 98,
        ballControl: 97,
        dribbling: 98,
        composure: 93,
      },
      defending: {
        interceptions: 50,
        headingAcc: 95,
        defAware: 34,
        standTackle: 44,
        slideTackle: 42,
      },
      physical: {
        jumping: 99,
        stamina: 99,
        strength: 87,
        aggression: 72,
      },
    },
  },
  {
    id: crypto.randomUUID(),
    name: 'Erling Braut Haaland',
    age: 23,
    nationality: 'Norwegian',
    height: 194,
    weight: 88,
    position: EPosition.FORWARD,
    club: 'Manchester City',
    number: 9,
    imgUrl: 'https://i.pinimg.com/736x/ed/e8/e3/ede8e34fc508c8d369cb4570071cb092.jpg',
    videosUrl: [
      'https://www.youtube.com/shorts/g27g0gJn71E',
      'https://www.youtube.com/shorts/uAzmE2WR3WU',
      'https://www.youtube.com/shorts/gpDk-uLrRlw',
    ],
    attributes: {
      pace: {
        acceleration: 92,
        sprintSpeed: 99,
      },
      shooting: {
        attPosition: 99,
        finishing: 99,
        shotPower: 99,
        longShots: 94,
        volleys: 98,
        penalties: 92,
      },
      passing: {
        vision: 87,
        crossing: 60,
        fkAcc: 73,
        shortPass: 91,
        longPass: 72,
        curve: 91,
      },
      dribbling: {
        agility: 88,
        balance: 85,
        reactions: 99,
        ballControl: 93,
        dribbling: 90,
        composure: 99,
      },
      defending: {
        interceptions: 54,
        headingAcc: 99,
        defAware: 47,
        standTackle: 58,
        slideTackle: 36,
      },
      physical: {
        jumping: 99,
        stamina: 90,
        strength: 99,
        aggression: 99,
      },
    },
  },
  {
    id: '123e4567-e89b-12d3-a456-426614174006',
    name: 'Jude Bellingham',
    age: 21,
    nationality: 'English',
    height: 185,
    weight: 80,
    position: EPosition.MIDFIELDER,
    club: 'Borussia Dortmund',
    number: 22,
    imgUrl:
      'https://imgs.search.brave.com/vb5Y9Y8w8zsaJlRw-fURaTb5Z2092lU_jl-kYN8kg-k/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDEzNTI4/NzkzLmpwZw',
    videosUrl: [
      'https://www.youtube.com/shorts/0pbYM5l8aNY',
      'https://www.youtube.com/shorts/GIMKzikZ--A',
      'https://www.youtube.com/shorts/1Ad0vVNRnZE',
    ],
    attributes: {
      pace: {
        acceleration: 94,
        sprintSpeed: 92,
      },
      shooting: {
        attPosition: 97,
        finishing: 94,
        shotPower: 96,
        longShots: 91,
        volleys: 87,
        penalties: 70,
      },
      passing: {
        vision: 98,
        crossing: 80,
        fkAcc: 57,
        shortPass: 99,
        longPass: 99,
        curve: 85,
      },
      dribbling: {
        agility: 97,
        balance: 95,
        reactions: 99,
        ballControl: 99,
        dribbling: 99,
        composure: 97,
      },
      defending: {
        interceptions: 97,
        headingAcc: 81,
        defAware: 91,
        standTackle: 93,
        slideTackle: 91,
      },
      physical: {
        jumping: 93,
        stamina: 99,
        strength: 90,
        aggression: 98,
      },
    },
  },
];
