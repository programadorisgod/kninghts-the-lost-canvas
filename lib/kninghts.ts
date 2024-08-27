import IGods from '../interface/gods.interface';
import { IKninghts } from '../interface/kininghts.interface';

const KNINGHTS = [
  {
    kninghts: [
      {
        name: 'Tenma',
        constellation: 'Pegaso',
        image:
          'https://i.pinimg.com/originals/b7/8d/cc/b78dccc52135e6d04c918c73e327dabe.jpg',
      },
      {
        name: 'Shion',
        constellation: 'Aries',
        image:
          'https://i.pinimg.com/474x/1b/bf/be/1bbfbe38eb8e8258479eb565c41a029f.jpg',
      },
      {
        name: 'Aldebaran',
        constellation: 'Tauro',
        image:
          'https://i.pinimg.com/originals/da/cd/a7/dacda76ef3b96bef649222028420db98.jpg',
      },
      {
        name: 'Aspros',
        constellation: 'Géminis',
        image:
          'https://i.pinimg.com/originals/c6/9b/6e/c69b6ed7e95caaba1a60eb6d2afbdaa8.jpg',
      },
      {
        name: 'Manigoldo',
        constellation: 'Cáncer',
        image:
          'https://static.wikia.nocookie.net/saintseiya/images/4/45/Manigoldo_de_cancer_lc.png/revision/latest?cb=20130627234154&path-prefix=es',
      },
      {
        name: 'Regulus',
        constellation: 'Leo',
        image:
          'https://static.wikia.nocookie.net/saintseiya/images/0/0a/22.regulus.jpg/revision/latest?cb=20130927172553',
      },
      {
        name: 'Asmita',
        constellation: 'Virgo',
        image:
          'https://i.pinimg.com/550x/12/cf/3f/12cf3f735eabc561a45b6d6fefeb9da2.jpg',
      },
      {
        name: 'Dohko',
        constellation: 'Libra',
        image:
          'https://static.wikia.nocookie.net/thelostcanvas/images/2/28/Libra_Dohko.jpg/revision/latest?cb=20110412025103',
      },
      {
        name: 'Albafica',
        constellation: 'Piscis',
        image:
          'https://i.pinimg.com/736x/1d/49/33/1d4933a0c4807a9ff42468916cb5f156.jpg',
      },
    ],
  },
];

const GODS = [
  {
    gods: [
      {
        name: 'Hades',
        domain: 'Inframundo',
        image: 'https://play-reactor.com/wp-content/uploads/2011/07/alone.jpg',
      },
      {
        name: 'Atenea',
        domain: 'Sabiduría y Guerra',
        image:
          'https://i.pinimg.com/564x/59/d4/a2/59d4a267e5a833a76935c17d4092b7f4.jpg',
      },
      {
        name: 'Hypnos',
        domain: 'Sueño',
        image:
          'url_imahttps://static.wikia.nocookie.net/saintseiya/images/0/05/Hypnos_TLC25.png/revision/latest?cb=20140122001816&path-prefix=esgen_hypnos',
      },
      {
        name: 'Thanatos',
        domain: 'Muerte',
        image:
          'https://static.wikia.nocookie.net/saintseiya/images/8/85/Thanatos_%28Lost_Canvas%29.png/revision/latest?cb=20120816172030&path-prefix=es',
      },
      {
        name: 'Pandora',
        domain: 'Guardián de Hades',
        image:
          'url_imagehttps://i.pinimg.com/originals/b3/11/91/b3119194427e9f335a5f779b080137eb.jpgn_pandora',
      },
    ],
  },
];

export const getKninghts = (): IKninghts[] => {
  return KNINGHTS[0].kninghts;
};

export const getGods = (): IGods[] => {
  return GODS[0].gods;
};
