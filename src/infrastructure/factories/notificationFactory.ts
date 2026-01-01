import { INotification } from "../../core/usecase/interfaces/INotification";
import { EmailNotifier } from "../notification/EmailNotifier";
import { GmailNotifier } from "../notification/GmailNotifier";

export class NotificationFactory {
 static createNotifier(
    notifierName: "email" | "gmail" | string | undefined
  ): INotification {
    switch ((notifierName || "").toLowerCase()) {
      case "gmail":
        return new GmailNotifier();
      case "email":
      default:
        return new EmailNotifier();
    }
  }
}

