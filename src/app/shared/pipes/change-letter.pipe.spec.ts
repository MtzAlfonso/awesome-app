import { ChangeLetterPipe } from './change-letter.pipe';

describe('ChangeLetterPipe', () => {
  it('create an instance', () => {
    const pipe = new ChangeLetterPipe();
    expect(pipe).toBeTruthy();
  });

  it('should transform "aeiou" to "43109"', () => {
    const pipe = new ChangeLetterPipe();
    expect(pipe.transform('aeiou')).toBe('43109');
  });

  it('should transform "áéíóú" to "43109"', () => {
    const pipe = new ChangeLetterPipe();
    expect(pipe.transform('áéíóú')).toBe('43109');
  });

  it('should transform "AEIOU" to "43109"', () => {
    const pipe = new ChangeLetterPipe();
    expect(pipe.transform('AEIOU')).toBe('43109');
  });

  it('should transform "pingüino" to "p1ng91n0"', () => {
    const pipe = new ChangeLetterPipe();
    expect(pipe.transform('pingüino')).toBe('p1ng91n0');
  });

  it('should transform "para un tipo de contraseña" to "p4r4 9n t1p0 d3 c0ntr4s3ñ4"', () => {
    const pipe = new ChangeLetterPipe();
    expect(pipe.transform('para un tipo de contraseña')).toBe(
      'p4r4 9n t1p0 d3 c0ntr4s3ñ4'
    );
  });

  it('should transform "PARA UN TIPO DE CONTRASEÑA" to "P4R4 9N T1P0 D3 C0NTR4S3Ñ4"', () => {
    const pipe = new ChangeLetterPipe();
    expect(pipe.transform('PARA UN TIPO DE CONTRASEÑA')).toBe(
      'P4R4 9N T1P0 D3 C0NTR4S3Ñ4'
    );
  });

  it('should transform "Hola cómo estás?" to "H0l4 c0m0 3st4s?"', () => {
    const pipe = new ChangeLetterPipe();
    expect(pipe.transform('Hola cómo estás?')).toBe('H0l4 c0m0 3st4s?');
  });

  it('should transform "HOLA CÓMO ESTÁS?" to "H0L4 C0M0 3ST4S?"', () => {
    const pipe = new ChangeLetterPipe();
    expect(pipe.transform('HOLA CÓMO ESTÁS?')).toBe('H0L4 C0M0 3ST4S?');
  });

  it('should not transform "rtyp"', () => {
    const pipe = new ChangeLetterPipe();
    expect(pipe.transform('rtyp')).toBe('rtyp');
  });
});
