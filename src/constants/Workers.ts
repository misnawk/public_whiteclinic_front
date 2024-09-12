type DatePay = {
  date: string;
  pay: string;
};

export type Worker = {
  name: string;
  tel?: string;
  address?: string;
  available?: string[];
  datePay?: DatePay[];
};

export type WorkerType = {
  [key: string]: Worker;
};

export const WorkerWage: WorkerType = {
  worker1: {
    name: '홍길동',
    tel: '0101111111',
    address: '인천 부평',
    available: ['벽걸이', '원웨이'],
    datePay: [
      { date: '6월1일', pay: 100000 + '원' },
      { date: '6월2일', pay: 100000 + '원' },
      { date: '6월3일', pay: 200000 + '원' },
      { date: '6월4일', pay: 40000 + '원' },
      { date: '6월5일', pay: 0 + '원' },
      { date: '6월6일', pay: 70000 + '원' },
      { date: '6월7일', pay: 50000 + '원' },
    ],
  },
  worker2: {
    name: '김철수',
    tel: '0102222222',
    address: '서울 강남',
    available: ['스탠드', '매립'],
    datePay: [
      { date: '6월1일', pay: 90000 + '원' },
      { date: '6월2일', pay: 110000 + '원' },
      { date: '6월3일', pay: 110000 + '원' },
      { date: '6월4일', pay: 90000 + '원' },
      { date: '6월5일', pay: 80000 + '원' },
      { date: '6월6일', pay: 0 + '원' },
      { date: '6월7일', pay: 120000 + '원' },
    ],
  },
  worker3: {
    name: '이영희',
    tel: '0103333333',
    address: '부산 해운대',
    available: ['원웨이', '직부'],
    datePay: [
      { date: '6월1일', pay: 80000 + '원' },
      { date: '6월2일', pay: 80000 + '원' },
      { date: '6월3일', pay: 0 + '원' },
      { date: '6월4일', pay: 150000 + '원' },
      { date: '6월5일', pay: 150000 + '원' },
      { date: '6월6일', pay: 100000 + '원' },
      { date: '6월7일', pay: 100000 + '원' },
    ],
  },
  worker4: {
    name: '박민수',
    tel: '0104444444',
    address: '대구 수성구',
    available: ['매립', '스탠드'],
    datePay: [
      { date: '6월1일', pay: 120000 + '원' },
      { date: '6월2일', pay: 120000 + '원' },
      { date: '6월3일', pay: 120000 + '원' },
      { date: '6월4일', pay: 0 + '원' },
      { date: '6월5일', pay: 0 + '원' },
      { date: '6월6일', pay: 180000 + '원' },
      { date: '6월7일', pay: 180000 + '원' },
    ],
  },
  worker5: {
    name: '정수진',
    tel: '0105555555',
    address: '광주 서구',
    available: ['직부', '벽걸이'],
    datePay: [
      { date: '6월1일', pay: 70000 + '원' },
      { date: '6월2일', pay: 70000 + '원' },
      { date: '6월3일', pay: 140000 + '원' },
      { date: '6월4일', pay: 140000 + '원' },
      { date: '6월5일', pay: 70000 + '원' },
      { date: '6월6일', pay: 0 + '원' },
      { date: '6월7일', pay: 210000 + '원' },
    ],
  },
  worker6: {
    name: '강지훈',
    tel: '0106666666',
    address: '대전 유성구',
    available: ['원웨이', '스탠드'],
    datePay: [
      { date: '6월1일', pay: 110000 + '원' },
      { date: '6월2일', pay: 110000 + '원' },
      { date: '6월3일', pay: 110000 + '원' },
      { date: '6월4일', pay: 110000 + '원' },
      { date: '6월5일', pay: 110000 + '원' },
      { date: '6월6일', pay: 0 + '원' },
      { date: '6월7일', pay: 0 + '원' },
    ],
  },
};
