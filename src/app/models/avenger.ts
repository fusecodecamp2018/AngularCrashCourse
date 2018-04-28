export class Avenger {
  name: string;
  realName: string;
  icon: string;
  description: string;
  isVillian: boolean;
  constructor(name: string, realName: string, icon: string, description: string) {
    this.name = name;
    this.realName = realName;
    this.icon = icon;
    this.description = description;
    this.isVillian = false;
  }
}
