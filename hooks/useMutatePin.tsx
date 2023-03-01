import { useMutation } from 'react-query';
import { pageSizeMedium } from '../utils/constants';

type PinProps = {
  data: {
    ownerID?: string;
    websiteID?: string;
    categoryID?: string;
    pieceID?: string;
    approved?: boolean;
    rejected?: boolean;
    rejectionReason?: string;
  };
  adminID?: string;
  action: 'create' | 'edit' | 'reject' | 'delete' | 'unreject' | 'approve';
  pinID?: string;
};

const useMutatePin = (getPin: (options: any) => void) => {
  const apiUrl = process.env.NEXT_PUBLIC_ADMIN_SERVER!
  return useMutation(
    (params: PinProps) =>
      fetch(apiUrl, {
        method: 'POST',
        body: JSON.stringify(params),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      })
        .then(response => response.json()),
    {
      onSuccess: (data) => {
        console.log('data from onSuccess in useMutatePin', data)
        getPin({ variables: { id: data.pinID, pageSizeMedium } });
      },
    }
  );
};

export default useMutatePin;
