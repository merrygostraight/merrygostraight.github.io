import SgFace from 'assets/personal/sg.jpeg';
import SgFatherFace from 'assets/personal/sg_father.jpg';
import SgMotherFace from 'assets/personal/sg_mother.jpg';
import JyFace from 'assets/personal/jy.jpeg';
import JyFatherFace from 'assets/personal/jy_father.jpg';
import JyMotherFace from 'assets/personal/jy_mother.jpg';
import photo00 from 'assets/gallery/wedding0.JPG';
import photo01 from 'assets/gallery/wedding1.jpeg';
import photo02 from 'assets/gallery/wedding2.jpeg';
import photo03 from 'assets/gallery/wedding3.jpeg';
import photo04 from 'assets/gallery/wedding4.jpeg';
import photo05 from 'assets/gallery/wedding5.jpeg';
import photo06 from 'assets/gallery/wedding6.jpeg';

export const FAMILY_INFO =  {
  SG: {
    image: SgFace,
    name: "신랑 김승규",
    tel: '010-2634-5307',
  },
  SG_FATHER: {
    image: SgFatherFace,
    name: "아버지 김지룡",
    tel: '010-5433-1744',
  },
  SG_MOTHER: {
    image: SgMotherFace,
    name: "어머니 이경우",
    tel: '010-8833-5307',
  },
  JY: {
    image: JyFace,
    name: "신부 마주연",
    tel: '010-9127-9799',
  },
  JY_FATHER: {
    image: JyFatherFace,
    name: "아버지 마재언",
    tel: '010-3686-4382',
  },
  JY_MOTHER: {
    image: JyMotherFace,
    name: "어머니 백경숙",
    tel: '010-9500-7549',
  },
};

export const ACCOUNT_LIST_1 = [
  {
    name: '김승규',
    account: '기업 0000-000-000000',
  },
  {
    name: '김지룡',
    account: '국민 0000-000-000000',
  },
];

export const ACCOUNT_LIST_2 = [
  {
    name: '마주연',
    account: '우리 0000-000-000000',
  },
  {
    name: '마재언',
    account: '농협 0000-000-000000',
  },
];

export const WEDDING_PHOTOS = [
  { title: 'photos0', image: photo00 },
  { title: 'photos1', image: photo01 },
  { title: 'photos2', image: photo02 },
  { title: 'photos3', image: photo03 },
  { title: 'photos4', image: photo04 },
  { title: 'photos5', image: photo05 },
  { title: 'photos6', image: photo06 },
];
