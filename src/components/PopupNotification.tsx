type PopupNotificationProps = {
  content: string;
  backgroundColor: string;
};

const PopupNotification: React.FC<PopupNotificationProps> = ({
  content,
  backgroundColor,
}) => {
  return (
    <div
      className={`fixed bottom-10 right-16  ${backgroundColor} text-white px-4 py-2 rounded-md`}
    >
      {content}
    </div>
  );
};

export default PopupNotification;
