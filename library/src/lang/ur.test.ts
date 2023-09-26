import { describe, expect, test } from 'bun:test';
import { urduNumInWords } from './ur';

describe.todo('اردو', () => {
  describe('انفرادی اعداد', () => {
    test.each<readonly [number, string]>([
      [0, 'صفر'],
      [1, 'ایک'],
      [2, 'دو'],
      [3, 'تین'],
      [4, 'چار'],
      [5, 'پانچ'],
      [6, 'چھے'],
      [7, 'سات'],
      [8, 'آٹھ'],
      [9, 'نو'],
    ])('%i کو %s واپس کرنا چاہئے', (num, expected) => {
      expect(urduNumInWords(num)).toBe(expected);
    });
  });

  describe('دو اعداد', () => {
    test.each<readonly [number, string]>([
      [10, 'دس'],
      [11, 'گیارہ'],
      [12, 'بارہ'],
      [21, 'اکیس'],
      [99, 'نواسی'],
    ])('%i کو %s واپس کرنا چاہئے', (num, expected) => {
      expect(urduNumInWords(num)).toBe(expected);
    });
  });

  describe('تین اعداد', () => {
    test.each<readonly [number, string]>([
      [100, 'سو'],
      [101, 'سو ایک'],
      [111, 'سو گیارہ'],
      [321, 'تین سو اکیس'],
      [999, 'نو سو نواسی'],
    ])('%i کو %s واپس کرنا چاہئے', (num, expected) => {
      expect(urduNumInWords(num)).toBe(expected);
    });
  });

  describe('ہزار', () => {
    test.each<readonly [number, string]>([
      [1000, 'ایک ہزار'],
      [1001, 'ایک ہزار ایک'],
      [2001, 'دو ہزار ایک'],
      [4321, 'چار ہزار تین سو اکیس'],
      [9999, 'نو ہزار نو سو نواسی'],
    ])('%i کو %s واپس کرنا چاہئے', (num, expected) => {
      expect(urduNumInWords(num)).toBe(expected);
    });
  });

  describe('ملین', () => {
    test.each<readonly [number, string]>([
      [1000000, 'ایک ملین'],
      [2000001, 'دو ملین ایک'],
      [1234567, 'ایک ملین ایک سو تیس ہزار چوبیس ہزار پانچ سو ستانوے ستالیس'],
      [7654321, 'سات ملین چھببیس ہزار پانچ سو چوبیس ہزار تین سو اکیس'],
      [9999999, 'نو ملین نو سو نواسی ہزار نو سو نواسی'],
    ])('%i کو %s واپس کرنا چاہئے', (num, expected) => {
      expect(urduNumInWords(num)).toBe(expected);
    });
  });

  describe('بلین', () => {
    test.each<readonly [number, string]>([
      [1000000000, 'ایک بلین'],
      [2000000001, 'دو بلین ایک'],
      [1234567890, 'ایک بلین ایک سو تیس ہزار پانچ سو چببیس ہزار آٹھ سو نوببیس'],
      [9876543210, 'نو بلین آٹھ سو ستالیس ہزار چوبیس ہزار تین سو دو'],
      [9999999999, 'نو بلین نو سو نواسی ہزار نو سو نواسی'],
    ])('%i کو %s واپس کرنا چاہئے', (num, expected) => {
      expect(urduNumInWords(num)).toBe(expected);
    });
  });

  describe('ترلین', () => {
    test.each<readonly [number, string]>([
      [1000000000000, 'ایک ترلین'],
      [2000000000001, 'دو ترلین ایک'],
      [
        1234567890123,
        'ایک ترلین ایک سو تیس بلین پانچ سو چببیس بلین آٹھ سو نوبیس ہزار ایک سو تیس',
      ],
      [
        9876543210987,
        'نو ترلین آٹھ سو ستالیس بلین پانچ سو چببیس بلین دو ہزار نو سو ستانوے ستالیس',
      ],
      [9999999999999, 'نو ترلین نو سو نواسی بلین نو سو نواسی ہزار نو سو نواسی'],
    ])('%i کو %s واپس کرنا چاہئے', (num, expected) => {
      expect(urduNumInWords(num)).toBe(expected);
    });
  });
});
