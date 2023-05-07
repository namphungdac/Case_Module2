import {BaseStation,Status,Band4G,Provider,District} from "./BaseStation";
export type Bandwidth = 10 | 15 | 20;

export class eNodeB extends BaseStation {
    constructor(code: string,
                status: Status,
                band: Band4G,
                private bandwidth: Bandwidth,
                lat: number,
                long: number,
                district: District,
                provider: Provider) {
        super(code, status, band, lat, long, district, provider);
    }

    getCode(): string {
        return this.code;
    }

    getStatus(): Status {
        return this.status;
    }

    getBand(): Band4G {
        return this.band;
    }

    getBandwidth(): Bandwidth {
        return this.bandwidth;
    }

    getLong(): number {
        return this.long;
    }

    getLat(): number {
        return this.lat;
    }

    getDistrict(): District {
        return this.district;
    }

    getProvider(): Provider {
        return this.provider;
    }

    setCode(value: string): void {
        this.code = value;
    }

    setStatus(value: Status): void {
        this.status = value;
    }

    setBandwidth(value: Bandwidth): void {
        this.bandwidth = value;
    }
}
