export type Status = 'ON' | 'OFF';
export type Band4G = '700Mhz' | '1800Mhz' | '2100Mhz' | '2600Mhz';
export type District = 'Cầu Giấy' | 'Nam Từ Liêm' | 'Hà Đông' | 'Thanh Xuân';
export type Provider = 'Ericsson' | 'Nokia' | 'Huawei' | 'ZTE';
export abstract class BaseStation {
    constructor(protected code: string,
                protected status: Status,
                protected band: Band4G,
                protected readonly lat: number,
                protected readonly long: number,
                protected readonly district: District,
                protected readonly provider: Provider) {
    }

    abstract getCode(): string;

    abstract getStatus(): Status;

    abstract getBand(): Band4G;

    abstract getLong(): number;

    abstract getLat(): number;

    abstract getDistrict(): District;

    abstract getProvider(): Provider;

    abstract setCode(value: string): void;

    abstract setStatus(value: Status): void;

}