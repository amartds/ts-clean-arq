import { randomUUID } from 'crypto';
export type LatLng = { lat: number; lng: number };

export type RouteProps = {
  title: string;
  startPosition: LatLng;
  endPosition: LatLng;
  points?: Array<LatLng>;
};

export class Route {
  props: Required<RouteProps>;
  public readonly id: string;
  constructor(props: RouteProps, id?: string) {
    this.id = id || randomUUID();
    this.props = {
      ...props,
      points: props.points || [],
    };
  }

  get title() {
    return this.props.title;
  }

  private set title(value: string) {
    this.title = value;
  }

  get startPosition() {
    return this.props.startPosition;
  }

  get points() {
    return this.props.points;
  }

  private setPoints(value: Array<LatLng>) {
    this.props.points = value;
  }

  private set startPosition(value: LatLng) {
    this.props.startPosition = value;
  }

  get endPosition() {
    return this.props.endPosition;
  }

  private set endPosition(value: LatLng) {
    this.props.endPosition = value;
  }

  updateTitle(title: string) {
    this.props.title = title;
  }

  updatePoints(points: Array<LatLng>) {
    this.props.points = points;
  }

  updatePosition(startPosition: LatLng, endPosition: LatLng) {
    this.startPosition = startPosition;
    this.endPosition = endPosition;
  }

  toJSON() {
    return {
      id: this.id,
      ...this.props,
    };
  }
}

const rota = new Route({
  title: 'minha rota',
  startPosition: { lat: 15, lng: 15 },
  endPosition: { lat: 20, lng: 20 },
  points: [
    { lat: 16, lng: 16 },
    { lat: 17, lng: 17 },
  ],
});
