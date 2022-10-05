import useForm from '../../hooks/useForm';
import Button from '../UI/buttons/Button';

const init = {
  text: '',
  checked: false,
  group: 'home',
  priority: 'medium',
  file: null,
};

const Task = () => {
  const { formState, handleChange, handleSubmit } = useForm({
    init,
    validate: true,
  });

  const cb = ({ values }) => alert(JSON.stringify(values));

  return (
    <div>
      <h1>Tasks</h1>

      <form onSubmit={(e) => handleSubmit(e, cb)}>
        <input
          type="checkbox"
          name={'checked'}
          checked={formState.checked.value}
          onChange={handleChange}
        />

        <input
          type="text"
          name={'text'}
          value={formState.text.value}
          onChange={handleChange}
        />

        <select
          style={{ marginLeft: '1rem' }}
          name="group"
          value={formState.group.value}
          onChange={handleChange}
        >
          <option value="home">Home</option>
          <option value="office">Office</option>
        </select>

        <input
          type="radio"
          name="priority"
          value={'low'}
          onChange={handleChange}
        />
        Low

        <input
          type="radio"
          name="priority"
          value={'medium'}
          onChange={handleChange}
        />
        Medium

        <input
          type="radio"
          name="priority"
          value={'high'}
          onChange={handleChange}
        />
        High

        <input
          type="file"
          name="file"
          value={formState.file.value}
          onChange={handleChange}
        />

        <Button>Submit</Button>
      </form>
    </div>
  );
};

export default Task;
