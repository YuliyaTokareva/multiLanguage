import * as React from 'react';
import PageWrapper from '../multisite/components/pageWrapper/PageWrapper';
import ProfileData from '../multisite/components/profileData/ProfileData';

const Profile: React.FC = () => {
  return (
    <PageWrapper>
      <ProfileData />
    </PageWrapper>
  );
};

export default Profile;
