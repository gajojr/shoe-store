import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import axios from 'axios';

Enzyme.configure({ adapter: new Adapter() });

describe('Comments Section', () => {
    it('return array of 4 comments', async () => {
        const response = await axios.get('http://localhost:5000/comments');
        const comments = response.data.comments;
        expect(comments.length).toBe(4);
    }); 
});