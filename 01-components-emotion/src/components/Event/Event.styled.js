import styled from '@emotion/styled';

// .event {}

export const EventContainer = styled.div`
  position: relative;
  border: 2px dashed black;
  padding: 8px;
  border-radius: 4px;
`;

// .title {}

export const EventTitle = styled.h2`
  margin-top: 0;
  font-size: 14px;
  line-height: 24px;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

// .info {}

export const EventInfo = styled.p`
  display: flex;
  align-items: center;
  margin-top: 0;
  margin-bottom: 8px;
  color: var(--color-primary-text);
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  letter-spacing: 0.25px;

  svg {
    display: block;
    margin-right: 8px;
    color: var(--color-secondary-text);
  }
`;

export const EventChip = styled.span`
  position: absolute;
  top: 4px;
  right: 4px;
  padding: 4px 8px;
  border-radius: 4px;
  text-transform: uppercase;
  color: #fff;
  background-color: ${props => {
    switch (props.eventType) {
      case 'free':
        return 'var(--color-green)';
      case 'paid':
        return 'var(--color-blue)';
      case 'vip':
        return 'var(--color-red)';
      default:
        return '#000';
    }
  }};
`;

// .free {
//   background-color: var(--color-green);
// }

// .paid {
//   background-color: var(--color-blue);
// }

// .vip {
//   background-color: var(--color-red);
// }
