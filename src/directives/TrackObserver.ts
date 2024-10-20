// types.ts
export interface TrackParams {
  pid?: string; // 产品ID
  aid?: string; // 活动ID
  [key: string]: any; // 其他自定义参数
}

class TrackObserver {
  private observer: IntersectionObserver;
  private uuid: number = 0;
  private tracks = new Map();
  private uuidKey = "data-uuid";

  constructor() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const params = this.getParams(entry.target);

          const { eventTypes } = params;
          if (eventTypes.includes("show")) {
            this.reportEvent("show", params);
          }

          if (eventTypes.includes("click")) {
            entry.target.addEventListener("click", params.handleClick);
          }

          // 移除观察
          this.observer.unobserve(entry.target);
        }
      });
    });
  }

  private getParams(el: Element) {
    const uuidKey = el.getAttribute(this.uuidKey);
    return this.tracks.get(uuidKey);
  }

  // 添加观察的元素
  public observe(el: Element, params: TrackParams) {
    const targetParams = params;
    if (params.eventTypes.includes("click")) {
      targetParams.handleClick = () => this.reportEvent("click", targetParams);
    }
    this.tracks.set(this.uuid.toString(), targetParams);
    el.setAttribute(this.uuidKey, this.uuid.toString());
    this.observer.observe(el);
    this.uuid++;
  }

  // 上报事件
  reportEvent(eventType: string, params: TrackParams) {
    console.log(`上报事件: ${eventType}`, params);
  }

  // 移除监听
  public unobserve(el: Element) {
    this.observer.unobserve(el);
    const params = this.getParams(el);
    if (params.eventTypes.includes("click")) {
      el.removeEventListener("click", params.handleClick);
    }
  }
}

export default new TrackObserver();
